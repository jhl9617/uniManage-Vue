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
                            <h4 v-if="loginMember">교직원 :{{ loginMember.name}}</h4>
                            <div class="text-secondary mb-1" align="left">
                                소속:<br>
                                구분:<br>
                            </div>
                        </div>
                    </td>
                    <tr>
                        <td>
                            <button class="btn btn-primary">비밀번호변경</button>
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
    },
    created() {
        this.getSession();
    },

}

</script>

<style scoped>

</style>