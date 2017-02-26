function dump(value){
	console.log(value);
}

$(function(){
	let lists = document.getElementsByClassName('link-list');

	for( let i=0; i < lists.length; i++ )
	{
		Sortable.create( lists[i], {
			onUpdate: function( evt ){
				let list = $(evt.item).closest('.link-list');

				let ordinals = {};

				list.find('.link-wrapper').each( function( index ){
					ordinals[ $(this).data('bookmark-id') ] = index + 1;
				});

				$.ajax({
					url: '/update-ordinals',
					type: 'POST',
					dataType: 'JSON',
					data: {
						ordinals: JSON.stringify(ordinals)
					}
				});
			}
		});
	}

	$('.remove-bookmark').click(function(e){
		e.preventDefault();

		if( confirm('Are you sure you want to remove this link?') ){
			$(this).closest('form').submit();
		}
	});
});