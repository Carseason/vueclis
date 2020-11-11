<template>
    <transition name="bounce">
        <el-dialog custom-class="zone" :title="title" :before-close="handleClose" :destroy-on-close="true" :visible.sync="dialogVisible" :width=" width || '30%'" :modal="modal">
            <slot></slot>
        </el-dialog>
    </transition>
</template>
<script>
export default {
    props: [
        "title",
        "width",
    ],
    data() {
        return {
            dialogVisible: true,
            modal: true,
        }
    },
    methods: {
        handleClose() {
            this.dialogVisible = false
            this.$emit("close", false)
        }
    }
}
</script>
<style >
.el-dialog__wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.el-dialog.zone {
    margin-top: 0 !important;
    max-width: 100%;
    max-height: calc(100% - 100px);
    overflow: auto;
}
.el-dialog.zone .el-dialog__headerbtn {
    top: 10px;
    right: 10px;
}
.el-dialog.zone .el-dialog__headerbtn .el-dialog__close {
    font-size: 1.5rem;
}
.el-dialog.zone .el-dialog__body {
    padding: 0;
}
</style>
<style lang="less" scoped>
.bounce-enter-active {
    animation: bounce-start 0.2s forwards;
}
.bounce-leave-active {
    animation: bounce-stop 0.2s forwards;
}
@keyframes bounce-start {
    0% {
        transform: scale(0);
    }

    10% {
        transform: scale(0.1);
    }

    20% {
        transform: scale(0.2);
    }

    30% {
        transform: scale(0.3);
    }

    40% {
        transform: scale(0.4);
    }

    50% {
        transform: scale(0.5);
    }

    60% {
        transform: scale(0.6);
    }

    70% {
        transform: scale(0.7);
    }

    80% {
        transform: scale(0.8);
    }

    90% {
        transform: scale(0.9);
    }
    100% {
        transform: scale(1);
    }
}
@keyframes bounce-stop {
    0% {
        transform: scale(1);
    }

    10% {
        transform: scale(0.9);
    }

    20% {
        transform: scale(0.8);
    }

    30% {
        transform: scale(0.7);
    }

    40% {
        transform: scale(0.6);
    }

    50% {
        transform: scale(0.5);
    }

    60% {
        transform: scale(0.4);
    }

    70% {
        transform: scale(0.3);
    }

    80% {
        transform: scale(0.2);
    }

    90% {
        transform: scale(0.1);
    }

    100% {
        transform: scale(0);
    }
}
</style>