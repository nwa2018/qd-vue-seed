import axios from 'axios'
import { memoize } from 'ramda'

export default {
  getProductList: memoize(_ => axios('http://rapapi.org/mockjsdata/33304/manage/product/list.do').then(rsp => rsp.data))
}
