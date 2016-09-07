const randomTxt = require('./index')
const paranymphSync = (l,c) => (function $(l,c,i,r){l[i]((e,d)=>l[++i]&&!e?$(l,c,i,d):c(e,d),r)})(l,c,0)

paranymphSync(
	Array(10).fill().map(val => {
		return callback => {
			return (callback => {
				setImmediate(() => {
					let test = new Set()
					paranymphSync(
						Array(10).fill().map(val => {
							return callback => {
								return (callback => {
									setImmediate(() => {
										Array(1000000).fill().forEach((val, key) => {
											test.add(randomTxt(867))
										})
										return callback(null)
									})
								})(callback)
							}
						})
					,
					(err, result) => {
						console.log(test.size - 10000000)
						return callback(null)
					})
				})
			})(callback)
		}
	})
,
(err, result) => {
	console.log('TEST END')
})
