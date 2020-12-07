import moment from 'moment'
import Vue from 'vue'

//自定义过滤器
Vue.filter('date-format',function(value,formatStr='YYYY-MM-DD HH:mm:ss'){
    // return moment(value).format(formatStr)
    return format(value,formatStr)
})