export type UrgencyLevel = 'critical' | 'warning' | 'normal' | 'overdue';

export function getUrgencyInfo(deadlineAt?: string | null): {
    label: string;
    level: UrgencyLevel;
} {
    if (!deadlineAt) {
        return { label: 'No deadline', level: 'normal' };
    }

    const now = new Date().getTime();
    const target = new Date(deadlineAt).getTime();
    const diffHours = (target - now) / (1000 * 60 * 60);

    if (diffHours < 0) {
        const daysLate = Math.ceil(Math.abs(diffHours) / 24);
        return { label: `${daysLate}d late`, level: 'overdue' };
    }

    if (diffHours <= 24) {
        return { label: '1 day left', level: 'critical' };
    }

    if (diffHours <= 48) {
        return { label: 'Tomorrow', level: 'warning' };
    }

    const daysLeft = Math.floor(diffHours / 24);
    return { label: `${daysLeft} days left`, level: daysLeft <= 3 ? 'warning' : 'normal' };
}