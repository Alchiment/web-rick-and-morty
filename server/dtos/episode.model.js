export class EpisodeModel {
    constructor(episode = {}) {
        this.name = episode.name || '';
    }
}