interface LyricXML {
    text: string,
    syllabic: string
}

interface AnotherTest {
    what: number
}

export type AllCombined = LyricXML & AnotherTest | null

export const testing: AllCombined = {text: 'howdy', syllabic: "it's here", what: 7}




