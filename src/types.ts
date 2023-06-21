export type Team = {
    name: string,
    score: number
}

export type Match = {
    homeTeam: Team,
    awayTeam: Team,
    id: string
}