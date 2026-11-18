export type Responsibility = 'my_turn' | 'their_turn';

export type SituationStatus =
    | 'active'
    | 'reminded_late'
    | 'completed'
    | 'discarded';


export type Situation = {
    id: String;
    title: String;
    responsibility: Responsibility;
    status: SituationStatus;

    //preson , vendor, eg amazon ,"aman"
    otherParty: string | null;

    //money at stake
    amount: number | null;
    currency: string | null;

    //key milestones
    deadlineAt: string | null;
    remindAt: string | null;
    attachmentUri: string | null;
    notificationId: string | null;

    createdAt: string;
    updatedAt: string;
    completedAt: string | null;
};


export type SituationEventType =
    | 'created'
    | 'reminder_scheduled'
    | 'completed'
    | 'discarded'
    | 'reopened'
    | 'note_added';

export type SituationEvent = {
    id: string;
    situationId: string;
    type: SituationEventType;
    note: string | null;
    createdAt: string;
};

// Summary metrics shown at the top of the Home and Archive screens
export type SituationStats = {
    activeCount: number;
    dueSoonCount: number;
    atStakeAmount: number;
    completedCount: number;
    recoveredAmount: number;
};