//your JS code here. If required.
document.getElementById('useForm').addEventListener('Submit', function(e){
	e.preventDefault();

	const name = document.getElementById('name').value.trim();
	const age =parseInt(document.getElementById('age').value.trim(),10);
	if(!name || !age){
		alert('Fill all out all the field');
		return;
	}

	new Promise((resolve,reject)=> {
		setTimeout(()=>{
			if(age>18)
				resolve();
			else{
				reject();
			}
		},4000)
	})
	.then(()=> {
		alert(`welcome ${name}. You can vote.`);
	})
	.catch(()=>{
		alert(`Oh sorry ${name}. You aren't old enough.`);
	});
});