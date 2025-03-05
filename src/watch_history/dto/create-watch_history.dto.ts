export class CreateWatchHistoryDto {
    profileId: number;
    contentId: number;
    episodeId: number;
    watched_seconds: number;
    last_watched: Date;
    is_completed: boolean;
    content_type: string;
}
