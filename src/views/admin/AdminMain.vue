<template>

        <div class="d-flex flex-column align-items-center text-center">
            <fieldset>
                <legend>개인정보
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </legend>
                <table>
                    <td>
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150">
                    </td>
                    <td>
                        <div class="mt-3">
                            <h4 v-if="loginMember">{{ loginMember.name}} 님</h4>
                            <div class="text-secondary mb-1" align="left">
                                <h6 v-if="loginMember">소속 : {{ loginMember.department_name}}</h6>
                            </div>
                        </div>
                    </td>
                    <tr>
                        <td>
                            <button class="btn btn-primary" v-on:click="fnMypage">마이페이지</button>
                        </td>
                    </tr>
                </table>

            </fieldset>
        </div>


</template>


<script>

export default {
    name: "AdminMain",
    data() {
        return {
            loginMember: null,

        };
    },
    methods: {
        async getSession() {
            try {
                const response = await fetch("/sessionCheck");
                if (response.status === 200) {
                    const data = await response.json();
                    console.log("Session data:", data);
                    this.loginMember = data;
                } else {
                    console.error("Error fetching session data");
                }
            } catch (error) {
                console.error("Error fetching session data:", error);
            }
        },
        fnMypage() {
            this.$router.push({
                path: '/admin/mypage',
                query: this.requestBody
            })
        },
    },
    created() {
        this.getSession();
    },

}

</script>

<style scoped>

</style>