export type ReminderPreset = {
    label: string;
    daysFromNow: number;
    timeHour: number; // 9:00 AM default
};

export const REMINDER_PRESETS: ReminderPreset[] = [
    { label: 'Tomorrow', daysFromNow: 1, timeHour: 9 },
    { label: 'In 3 days', daysFromNow: 3, timeHour: 9 },
    { label: 'In 7 days', daysFromNow: 7, timeHour: 9 },
];

export function getPresetDate(preset: ReminderPreset): Date {
    const date = new Date();
    date.setDate(date.getDate() + preset.daysFromNow);
    date.setHours(preset.timeHour, 0, 0, 0);
    return date;
}


//reminder quick-picks (Tomorrow, In 3 days, In 7 days).