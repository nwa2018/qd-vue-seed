import axios from 'axios'
import { memoize } from 'ramda'

export default {
  getProductList: memoize(_ => axios('http://127.0.0.1:7998/pkReadApi/1710YearGrandCeremony2').then(rsp => rsp.data))
}
