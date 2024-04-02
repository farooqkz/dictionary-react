class Api {
  private baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.getWord = this.getWord.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
    this.getRandomWord = this.getRandomWord.bind(this);
  }

  async function getWord(word: string) : Result | null {
    const response = await fetch(this.baseUrl + "/word/" + word);
    if (response.ok) {
      return await response.json();
    } else {
      return null;
    }
  }

  async function getSuggestions(part: string): string[] {
    const response = await fetch(this.baseUrl + "/suggestion/" + part);
    if (response.ok) {
      return await response.json();
    } else {
      return [];
    }
  }
}
