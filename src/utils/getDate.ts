let dateNow = new Date()
let dayNow = dateNow.getDate()
let monthNow = dateNow.getMonth() + 1
let yearNow = dateNow.getFullYear()

export let NowDate: string

if (monthNow < 10) {
  NowDate = yearNow + '-0' + monthNow + '-' + dayNow
} else {
  NowDate = yearNow + '-' + monthNow + '-' + dayNow
}