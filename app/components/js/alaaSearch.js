jQuery(document).ready(function(jQuery (this.elRef.nativeElement).find)){
	//open/close lateral filter
	jQuery (this.elRef.nativeElement).find('.cd-filter-trigger').on('click', function(){
		triggerFilter(true);
	});
	jQuery (this.elRef.nativeElement).find('.cd-filter .cd-close').on('click', function(){
		triggerFilter(false);
	});

	function triggerFilter(jQuery (this.elRef.nativeElement).findbool) {
		var elementsToTrigger = jQuery (this.elRef.nativeElement).find([jQuery (this.elRef.nativeElement).find('.cd-filter-trigger'), jQuery (this.elRef.nativeElement).find('.cd-filter'), jQuery (this.elRef.nativeElement).find('.cd-tab-filter'), jQuery (this.elRef.nativeElement).find('.cd-gallery')]);
		elementsToTrigger.each(function(){
			jQuery (this.elRef.nativeElement).find(this).toggleClass('filter-is-visible', jQuery (this.elRef.nativeElement).findbool);
		});
	}

	//mobile version - detect click event on filters tab
	var filter_tab_placeholder = jQuery (this.elRef.nativeElement).find('.cd-tab-filter .placeholder a'),
		filter_tab_placeholder_default_value = 'Select',
		filter_tab_placeholder_text = filter_tab_placeholder.text();
	
	jQuery (this.elRef.nativeElement).find('.cd-tab-filter li').on('click', function(event){
		//detect which tab filter item was selected
		var selected_filter = jQuery (this.elRef.nativeElement).find(event.target).data('type');
			
		//check if user has clicked the placeholder item
		if( jQuery (this.elRef.nativeElement).find(event.target).is(filter_tab_placeholder) ) {
			(filter_tab_placeholder_default_value == filter_tab_placeholder.text()) ? filter_tab_placeholder.text(filter_tab_placeholder_text) : filter_tab_placeholder.text(filter_tab_placeholder_default_value) ;
			jQuery (this.elRef.nativeElement).find('.cd-tab-filter').toggleClass('is-open');

		//check if user has clicked a filter already selected 
		} else if( filter_tab_placeholder.data('type') == selected_filter ) {
			filter_tab_placeholder.text(jQuery (this.elRef.nativeElement).find(event.target).text());
			jQuery (this.elRef.nativeElement).find('.cd-tab-filter').removeClass('is-open');	

		} else {
			//close the dropdown and change placeholder text/data-type value
			jQuery (this.elRef.nativeElement).find('.cd-tab-filter').removeClass('is-open');
			filter_tab_placeholder.text(jQuery (this.elRef.nativeElement).find(event.target).text()).data('type', selected_filter);
			filter_tab_placeholder_text = jQuery (this.elRef.nativeElement).find(event.target).text();
			
			//add class selected to the selected filter item
			jQuery (this.elRef.nativeElement).find('.cd-tab-filter .selected').removeClass('selected');
			jQuery (this.elRef.nativeElement).find(event.target).addClass('selected');
		}
	});
	
	//close filter dropdown inside lateral .cd-filter 
	jQuery (this.elRef.nativeElement).find('.cd-filter-block h4').on('click', function(){
		jQuery (this.elRef.nativeElement).find(this).toggleClass('closed').siblings('.cd-filter-content').slideToggle(300);
	})

	// //fix lateral filter and gallery on scrolling
	// jQuery (this.elRef.nativeElement).find(window).on('scroll', function(){
		// (!window.requestAnimationFrame) ? fixGallery() : window.requestAnimationFrame(fixGallery);
	// });

	// function fixGallery() {
		// var offsetTop = jQuery (this.elRef.nativeElement).find('.cd-main-content').offset().top,
			// scrollTop = jQuery (this.elRef.nativeElement).find(window).scrollTop();
		// ( scrollTop >= offsetTop ) ? jQuery (this.elRef.nativeElement).find('.cd-main-content').addClass('is-fixed') : jQuery (this.elRef.nativeElement).find('.cd-main-content').removeClass('is-fixed');
	// }

	/************************************
		MitItUp filter settings
		More details: 
		https://mixitup.kunkalabs.com/
		or:
		http://codepen.io/patrickkunka/
	*************************************/

	buttonFilter.init();
	jQuery (this.elRef.nativeElement).find('.cd-gallery ul').mixItUp({
	    controls: {
	    	enable: false
	    },
	    callbacks: {
	    	onMixStart: function(){
	    		jQuery (this.elRef.nativeElement).find('.cd-fail-message').fadeOut(200);
	    	},
	      	onMixFail: function(){
	      		jQuery (this.elRef.nativeElement).find('.cd-fail-message').fadeIn(200);
	    	}
	    }
	});

	//search filtering
	//credits http://codepen.io/edprats/pen/pzAdg
	var inputText;
	var jQuery (this.elRef.nativeElement).findmatching = jQuery (this.elRef.nativeElement).find();

	var delay = (function(){
		var timer = 0;
		return function(callback, ms){
			clearTimeout (timer);
		    timer = setTimeout(callback, ms);
		};
	})();

	jQuery (this.elRef.nativeElement).find(".cd-filter-content input[type='search']").keyup(function(){
	  	// Delay function invoked to make sure user stopped typing
	  	delay(function(){
	    	inputText = jQuery (this.elRef.nativeElement).find(".cd-filter-content input[type='search']").val().toLowerCase();
	   		// Check to see if input field is empty
	    	if ((inputText.length) > 0) {            
	      		jQuery (this.elRef.nativeElement).find('.mix').each(function() {
		        	var jQuery (this.elRef.nativeElement).findthis = jQuery (this.elRef.nativeElement).find(this);
		        
		        	// add item to be filtered out if input text matches items inside the title   
		        	if(jQuery (this.elRef.nativeElement).findthis.attr('class').toLowerCase().match(inputText)) {
		          		jQuery (this.elRef.nativeElement).findmatching = jQuery (this.elRef.nativeElement).findmatching.add(this);
		        	} else {
		          		// removes any previously matched item
		          		jQuery (this.elRef.nativeElement).findmatching = jQuery (this.elRef.nativeElement).findmatching.not(this);
		        	}
	      		});
	      		jQuery (this.elRef.nativeElement).find('.cd-gallery ul').mixItUp('filter', jQuery (this.elRef.nativeElement).findmatching);
	    	} else {
	      		// resets the filter to show all item if input is empty
	      		jQuery (this.elRef.nativeElement).find('.cd-gallery ul').mixItUp('filter', 'all');
	    	}
	  	}, 200 );
	});
});

/*****************************************************
	MixItUp - Define a single object literal 
	to contain all filter custom functionality
*****************************************************/
var buttonFilter = {
  	// Declare any variables we will need as properties of the object
  	jQuery (this.elRef.nativeElement).findfilters: null,
  	groups: [],
  	outputArray: [],
  	outputString: '',
  
  	// The "init" method will run on document ready and cache any jQuery objects we will need.
  	init: function(){
    	var self = this; // As a best practice, in each method we will asign "this" to the variable "self" so that it remains scope-agnostic. We will use it to refer to the parent "buttonFilter" object so that we can share methods and properties between all parts of the object.
    
    	self.jQuery (this.elRef.nativeElement).findfilters = jQuery (this.elRef.nativeElement).find('.cd-main-content');
    	self.jQuery (this.elRef.nativeElement).findcontainer = jQuery (this.elRef.nativeElement).find('.cd-gallery ul');
    
	    self.jQuery (this.elRef.nativeElement).findfilters.find('.cd-filters').each(function(){
	      	var jQuery (this.elRef.nativeElement).findthis = jQuery (this.elRef.nativeElement).find(this);
	      
		    self.groups.push({
		        jQuery (this.elRef.nativeElement).findinputs: jQuery (this.elRef.nativeElement).findthis.find('.filter'),
		        active: '',
		        tracker: false
		    });
	    });
	    
	    self.bindHandlers();
  	},
  
  	// The "bindHandlers" method will listen for whenever a button is clicked. 
  	bindHandlers: function(){
    	var self = this;

    	self.jQuery (this.elRef.nativeElement).findfilters.on('click', 'a', function(e){
	      	self.parseFilters();
    	});
	    self.jQuery (this.elRef.nativeElement).findfilters.on('change', function(){
	      self.parseFilters();           
	    });
  	},
  
  	parseFilters: function(){
	    var self = this;
	 
	    // loop through each filter group and grap the active filter from each one.
	    for(var i = 0, group; group = self.groups[i]; i++){
	    	group.active = [];
	    	group.jQuery (this.elRef.nativeElement).findinputs.each(function(){
	    		var jQuery (this.elRef.nativeElement).findthis = jQuery (this.elRef.nativeElement).find(this);
	    		if(jQuery (this.elRef.nativeElement).findthis.is('input[type="radio"]') || jQuery (this.elRef.nativeElement).findthis.is('input[type="checkbox"]')) {
	    			if(jQuery (this.elRef.nativeElement).findthis.is(':checked') ) {
	    				group.active.push(jQuery (this.elRef.nativeElement).findthis.attr('data-filter'));
	    			}
	    		} else if(jQuery (this.elRef.nativeElement).findthis.is('select')){
	    			group.active.push(jQuery (this.elRef.nativeElement).findthis.val());
	    		} else if( jQuery (this.elRef.nativeElement).findthis.find('.selected').length > 0 ) {
	    			group.active.push(jQuery (this.elRef.nativeElement).findthis.attr('data-filter'));
	    		}
	    	});
	    }
	    self.concatenate();
  	},
  
  	concatenate: function(){
    	var self = this;
    
    	self.outputString = ''; // Reset output string
    
	    for(var i = 0, group; group = self.groups[i]; i++){
	      	self.outputString += group.active;
	    }
    
	    // If the output string is empty, show all rather than none:    
	    !self.outputString.length && (self.outputString = 'all'); 
	
    	// Send the output string to MixItUp via the 'filter' method:    
		if(self.jQuery (this.elRef.nativeElement).findcontainer.mixItUp('isLoaded')){
	    	self.jQuery (this.elRef.nativeElement).findcontainer.mixItUp('filter', self.outputString);
		}
  	}
};