<template>
	<el-form ref="form" :model="form" label-width="100px" @submit.prevent="onSubmit" style="margin:20px;width:96%;min-width:600px;">
		<el-row :gutter="22">
			<el-col :span="11">
				<el-form-item label="活动名称">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
			</el-col>
			<el-col :span="11">
				<el-form-item label="申请组织">
					<el-input v-model="form.user"></el-input>
				</el-form-item>
			</el-col>
		</el-row>
		<el-row :gutter="22">
			<el-col :span="11">
				<el-form-item label="活动负责人">
					<el-input v-model="form.principal"></el-input>
				</el-form-item>
			</el-col>
			<el-col :span="11">
				<el-form-item label="联系方式">
					<el-input v-model="form.principalTel"></el-input>
				</el-form-item>
			</el-col>
		</el-row>
		<el-row gutter="22">
			<el-col :span="11">
				<el-form-item label="活动地点">
					<el-input v-model="form.place"></el-input>
				</el-form-item>
			</el-col>
		</el-row>
		<el-form-item label="活动时间">
			<el-col :span="10">
				<el-date-picker type="datetime" placeholder="选择开始日期" v-model="form.date1" style="width: 100%;" format="yyyy-MM-dd:hh:mm:ss"></el-date-picker>
			</el-col>
			<el-col class="line" :span="2" style="padding-left: 25px">一一</el-col>
			<el-col :span="10">
				<el-date-picker type="datetime" placeholder="选择结束日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
			</el-col>
		</el-form-item>
		<el-form-item label="活动介绍">
			<el-col :span="22">
				<el-input type="textarea" :rows="5" v-model="form.desc"></el-input>
			</el-col>
		</el-form-item>
		<el-form-item label="活动预算">
			<el-col :span="22">
				<el-input type="textarea" :rows="5" v-model="form.budget"></el-input>
			</el-col>
		</el-form-item>
		<el-row :gutter="22">
			<el-col :span="11">
				<el-form-item label="学生干部初审" >
					<el-select v-model="form.approver1" placeholder="请选择初审人" style="width: 100%">
						<el-option  v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
					</el-select>
				</el-form-item>
			</el-col>
			<el-col :span="11">
				<el-form-item label="教师复审">
					<el-select v-model="form.approver2" placeholder="请选择复审人" style="width: 100%">
						<el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
					</el-select>
				</el-form-item>
			</el-col>
		</el-row>
		<el-form-item>
			<el-button type="primary">提交申请</el-button>
			<el-button @click.native.prevent>取消</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					user:'',
					principal:'',
					principalTel:'',
					place:'',
					date1: '',
					date2: '',
					desc: '',
					budget:'',
					approver1:'',
					approver2:''
				}
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			}
		}
	}

</script>