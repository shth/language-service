import { NdjsonToMessageStream } from '@cucumber/message-streams'
import assert from 'assert'
import fs from 'fs'
import { pipeline as pipelineCb, Writable } from 'stream'
import { promisify } from 'util'

import { MessagesBuilderResult } from '../../src/messages/MessagesBuilder.js'
import { StepDocument } from '../../src/step-documents/types.js'
import { MessagesBuilderStream } from './MessagesBuilderStream.js'

const pipeline = promisify(pipelineCb)

describe('MessagesBuilder', () => {
  it('does not fail on duplicate parameter types', async () => {
    const readStream = fs.createReadStream(`test/messages/dupe-parameter-types.ndjson`, 'utf-8')
    let receivedError
    await pipeline(
      readStream,
      new NdjsonToMessageStream(),
      new MessagesBuilderStream((err) => (receivedError = err)),
      new Writable({
        objectMode: true,
        write(_result: MessagesBuilderResult, encoding, callback) {
          callback()
        },
      })
    )
    assert(receivedError)
  })

  it('does not fail on cucumber expression syntax errors', async () => {
    const readStream = fs.createReadStream(
      `test/messages/syntax-error-cucumber-expression.ndjson`,
      'utf-8'
    )
    let receivedError
    await pipeline(
      readStream,
      new NdjsonToMessageStream(),
      new MessagesBuilderStream((err) => (receivedError = err)),
      new Writable({
        objectMode: true,
        write(_result: MessagesBuilderResult, encoding, callback) {
          callback()
        },
      })
    )
    assert(receivedError)
  })

  it('builds MessagesBuilder from a message stream with parameter types', async () => {
    const readStream = fs.createReadStream(`test/messages/messages.ndjson`, 'utf-8')
    let result: MessagesBuilderResult
    await pipeline(
      readStream,
      new NdjsonToMessageStream(),
      new MessagesBuilderStream(),
      new Writable({
        objectMode: true,
        write(_result: MessagesBuilderResult, encoding, callback) {
          result = _result
          callback()
        },
      })
    )
    const expectedStepDocuments: Partial<StepDocument>[] = [
      {
        segments: ['I select the ', ['2nd'], ' snippet'],
        suggestion: 'I select the {ordinal} snippet',
      },
      {
        segments: [
          'I type ',
          ['"I have ${1|11,17,23|} cukes on my ${2|belly,table,tree|}"', '"cukes"'],
        ],
        suggestion: 'I type {string}',
      },
      {
        segments: [
          'the LSP snippet should be ',
          ['"I have ${1|11,17,23|} cukes on my ${2|belly,table,tree|}"', '"cukes"'],
        ],
        suggestion: 'the LSP snippet should be {string}',
      },
      {
        segments: ['the following Gherkin step texts exist:'],
        suggestion: 'the following Gherkin step texts exist:',
      },
      {
        segments: ['the following Step Definitions exist:'],
        suggestion: 'the following Step Definitions exist:',
      },
      {
        segments: ['the suggestions should be empty'],
        suggestion: 'the suggestions should be empty',
      },
      {
        segments: ['the suggestions should be:'],
        suggestion: 'the suggestions should be:',
      },
    ]
    assert.deepStrictEqual(
      result!.stepDocuments.map((d) => ({ segments: d.segments, suggestion: d.suggestion })),
      expectedStepDocuments
    )

    const expectedExpressionSources = [
      'the following Gherkin step texts exist:',
      'the following Step Definitions exist:',
      'I type {string}',
      'I select the {ordinal} snippet',
      'the suggestions should be:',
      'the suggestions should be empty',
      'the LSP snippet should be {string}',
    ]
    assert.deepStrictEqual(
      result!.expressions.map((e) => e.source),
      expectedExpressionSources
    )
  })
})
