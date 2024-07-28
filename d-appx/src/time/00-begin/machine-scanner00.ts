function daysFrom(to: number) {
    const ms = Date.now() - new Date(to).getTime();
    return (ms / 1000) * 60 * 60 * 24; // secs * min * hrs
}

export function findRecentlyRebooted(machines: {lastBootTime: number, name: string}[], maxDays: number) {
    return machines.filter(machine => daysFrom(machine.lastBootTime) < maxDays);
}

