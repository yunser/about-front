<template>
    <my-page title="捐赠列表" backable>
        <ui-article>
            <table>
                <tr>
                    <th>昵称</th>
                    <th>捐赠金额</th>
                    <!-- <th>渠道</th> -->
                    <th>时间</th>
                    <th>留言</th>
                </tr>
                <tr v-for="donation in donations">
                    <td>{{ donation.userName }}</td>
                    <td>{{ donation.number }}</td>
                    <!-- <td>{{ donation.type === 'wechat' ? '微信' : '支付宝'}}</td> -->
                    <td>{{ donation.donateTime | formatTime }}</td>
                    <td>{{ donation.message }}</td>
                </tr>
            </table>
        </ui-article>
    </my-page>
</template>

<script>
    import {format} from '../util/time'

    export default {
        data () {
            return {
                donations: []
            }
        },
        mounted() {
            this.$http.get('/apps/1/donations').then(
                response => {
                    let data = response.data
                    console.log(data)
                    this.donations = data
                },
                response => {
                    console.log(response)
                })
        },
        filters: {
            formatTime(time) {
                let date = new Date(time)
                return format(date, 'yyyy-MM-dd')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/var.scss";
</style>
