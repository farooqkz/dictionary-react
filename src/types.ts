export type Result = {
  phonetics: Phonetic[]
  meanings: Meaning[]
  word: string
}

export type Phonetic = {
  text: string
  audio?: string
}

export type Meaning = {
  partOfSpeech: string
  definitions: Definition[]
  synomyms: string[]
}

export type Definition = {
  definition: string
  example: string
}
