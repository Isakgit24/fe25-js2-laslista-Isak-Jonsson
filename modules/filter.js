

export function azOrder(arr, by) {
    const clone = [...arr]

    if (by === 'titleAz') clone.sort((a, b) => a.title.localeCompare(b.title));
    else if (by === 'titleZa') clone.sort((a, b) => b.title.localeCompare(a.title));
    else if (by === 'studioAz') clone.sort((a, b) => a.studio.localeCompare(b.studio));
    else if (by === 'studioZa') clone.sort((a, b) => b.studio.localeCompare(a.studio));
    return clone
}

export function firstOrLast(arr, by) {
    const clone = [...arr]
    if (by === 'firstToLast') {
        return clone
    }
    else if (by === 'lastToFirst') {
       clone.reverse()
    }

    return clone
}

export const filterFavAll = (arr, selcted) =>
    selcted === 'all' ? [...arr] :
        arr.filter(game => game.favorite === true);