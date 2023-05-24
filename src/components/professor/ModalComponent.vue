<template>
    <div class="modal">
        <div class="modal-content">
            <slot></slot>
            <div style="text-align: center">
                <button class="btn btn-dark" style="width: 100px" @click="$emit('close')">창 닫기</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal {
    width: 800px;
    height: 1000px;
    background-color: rgba(255, 255, 255, 0);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
}
</style>
<script setup>
</script>