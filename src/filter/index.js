// 将时间戳转为日期时间
//{{data.pubTime | mydate}}
export function mydate(timeStamp){
    let ts=parseInt(timeStamp)
    let date=new Date(ts)
    let year=date.getFullYear()
    let month=date.getMonth()
    let day=date.getDate()
    let hour=date.getHours()
    let min=date.getMinutes()
    let second=date.getSeconds()
    return `${year}年${month}月${day}日 ${hour}:${min}:${second}`
}