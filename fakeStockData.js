
export function getStockData() {
    return {
        name: 'Bombay Stock Exchange',
        symbol: 'BSE',
        price: getRandomNum(),
        time: getLiveTime()
    }
}

function getRandomNum() {
    return (Math.random() * 3).toFixed(2)
}

function getLiveTime() {
    const liveTime = new Date()
    const hh = liveTime.getHours()
    const mm = liveTime.getMinutes()
    const ss = liveTime.getSeconds()

    return `${hh}:${mm}:${ss}`
}