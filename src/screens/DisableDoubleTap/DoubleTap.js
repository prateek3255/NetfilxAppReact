 // 4.0.8

const debounce =  function(callback, wait=300, context = this)
{
	let timeout = null;
	let callbackArgs = null;
  
	const later = () => callback.apply(context, callbackArgs);
  
	return function()
	{
		/* eslint-disable prefer-rest-params */
		callbackArgs = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
};



export default debounce;