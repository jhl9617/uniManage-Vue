<template>
    <div class="modal">
        <div class="modal-content">
            <slot></slot>
            <button @click="$emit('close')">모달 닫기</button>
        </div>
    </div>
</template>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 800px;
    height: 700px;
    background-color: rgba(0, 0, 0, 0.5);
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