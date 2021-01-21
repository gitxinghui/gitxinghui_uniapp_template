const pop = (url) => {
	let time = undefined
	// 加载loading弹窗
	const showLoading = ($that) => {
		$that.popLoadModal = true;
	}

	// 选择dialog弹窗展示
	const showDialog = ($that) => {
		$that.popDiaModal = true;
	}

	// 关闭弹窗
	const closeModal = ($that,type) => {
		switch (e.type) {
			case 'dialog':
				$that.popDiaModal = false;
				break;
			case 'tip':
				$that.popTipModal.type = false;
				break;
			default:
				break;
		}
	}

	// 普通弹窗提示
	const showToast = ({title='',duration=1500,icon='none'}) => {
		//#ifdef APP-PLUS
		plus.nativeUI.toast(title,{
			duration : duration
		})
		//#endif
		//#ifndef APP-PLUS
		uni.showToast({
			title : title,
			duration : duration,
			icon : icon
		});
		//#endif
	}
	return {
		showLoading,
		showDialog,
		showToast,
		closeModal
	}
}

export {
	pop
}