let dateNow = new Date()
export let dayNow = dateNow.getDate()
export let monthNow = dateNow.getMonth() + 1
export let yearNow = dateNow.getFullYear()

export let NowDate: string

if (monthNow < 10) {
  NowDate = yearNow + '-0' + monthNow + '-' + dayNow
} else {
  NowDate = yearNow + '-' + monthNow + '-' + dayNow
}
