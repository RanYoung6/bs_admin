<template>
	<el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">
		<el-form-item label="动态内容">
			<el-input type="textarea" :rows="10" v-model="form.desc"></el-input>
		</el-form-item>
		<el-form-item label="添加图片">
			<el-upload
					action=""
					list-type="picture-card"
					multiple
					:limit="3"
					:on-preview="handlePictureCardPreview"
					:on-remove="handleRemove">
				<i class="el-icon-plus"></i>
				<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb，最多上传3张照片</div>
			</el-upload>
			<el-dialog :visible.sync="dialogVisible">
				<img width="100%" :src="dialogImageUrl" alt="">
			</el-dialog>
		</el-form-item>
		<el-form-item>
			<el-button type="primary">立即创建</el-button>
			<el-button @click.native.prevent>取消</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					desc: '',
					dialogImageUrl: '',
					dialogVisible: false,
				}
			}
		},
		methods: {
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},
			onSubmit() {
				console.log('submit!');
			}
		}
	}

</script>