"use strict"

var themeOptionArr = {
			typography: '',
			version: '',
			layout: '',
			primary: '',
			headerBg: '',
			navheaderBg: '',
			sidebarBg: '',
			sidebarStyle: '',
			sidebarPosition: '',
			headerPosition: '',
			containerLayout: '',
			//direction: '',
		};
		
		

/* Cookies Function */
function setCookie(cname, cvalue, exhours) 
	{
		var d = new Date();
		d.setTime(d.getTime() + (30*60*1000)); /* 30 Minutes */
		var expires = "expires="+ d.toString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

function getCookie(cname) 
	{
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i <ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

function deleteCookie(cname) 
	{
		var d = new Date();
		d.setTime(d.getTime() + (1)); // 1/1000 second
		var expires = "expires="+ d.toString();
		//document.cookie = cname + "=1;" + expires + ";path=/";
		document.cookie = cname + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT"+";path=/";
	}

function deleteAllCookie(reload = true)
	{
		jQuery.each(themeOptionArr, function(optionKey, optionValue) {
				deleteCookie(optionKey);
		});
		if(reload){
			location.reload();
		}
	}
 	
/* Cookies Function END */	
 	

(function($) {
	
	"use strict"
	
	//var direction =  getUrlParams('dir');
	var theme =  getUrlParams('theme');
	
	/* Dz Theme Demo Settings  */
	
	var dlabThemeSet0 = { /* Default Theme */
		typography: "poppins",
		version: "light",
		layout: "vertical",
		primary: "color_1",
		headerBg: "color_1",
		navheaderBg: "color_2",
		sidebarBg: "color_2",
		sidebarStyle: "full",
		sidebarPosition: "fixed",
		headerPosition: "fixed",
		containerLayout: "wide",
	};
	
	var dlabThemeSet1 = {
		typography: "poppins",
		version: "light",
		layout: "vertical",
		primary: "color_5",
		headerBg: "color_12",
		navheaderBg: "color_5",
		sidebarBg: "color_5",
		sidebarStyle: "full",
		sidebarPosition: "fixed",
		headerPosition: "fixed",
		containerLayout: "wide",
	};
	
	var dlabThemeSet2 = {
		typography: "poppins",
		version: "light",
		layout: "vertical",
		primary: "color_12",
		headerBg: "color_1",
		navheaderBg: "color_12",
		sidebarBg: "color_12",
		sidebarStyle: "mini",
		sidebarPosition: "fixed",
		headerPosition: "fixed",
		containerLayout: "wide",
	};
	
	
	var dlabThemeSet3 = {
		typography: "poppins",
		version: "light",
		layout: "vertical",
		primary: "color_14",
		headerBg: "color_1",
		navheaderBg: "color_14",
		sidebarBg: "color_14",
		sidebarStyle: "full",
		sidebarPosition: "fixed",
		headerPosition: "fixed",
		containerLayout: "wide",
	};
	
	var dlabThemeSet4 = {
		typography: "poppins",
		version: "light",
		layout: "vertical",
		primary: "color_2",
		headerBg: "color_2",
		navheaderBg: "color_2",
		sidebarBg: "color_1",
		sidebarStyle: "full",
		sidebarPosition: "fixed",
		headerPosition: "fixed",
		containerLayout: "wide",
	};
	
	var dlabThemeSet5 = {
		typography: "poppins",
		version: "light",	
		layout: "vertical",
		primary: "color_11",
		headerBg: "color_11",
		navheaderBg: "color_11",
		sidebarBg: "color_1",
		sidebarStyle: "full",
		sidebarPosition: "fixed",
		headerPosition: "fixed",
		containerLayout: "wide",
	};
	var dlabThemeSet6 = {
		typography: "poppins",
		version: "light",
		layout: "vertical",
		primary: "color_1",
		headerBg: "color_1",
		navheaderBg: "color_5",
		sidebarBg: "color_5",
		sidebarStyle: "overlay",
		sidebarPosition: "fixed",
		headerPosition: "fixed",
		containerLayout: "wide",
	};
	
		
	function themeChange(theme){
		var themeSettings = {};
		themeSettings = eval('dlabThemeSet'+theme);
		dlabSettingsOptions = themeSettings; /* For Screen Resize */
		new dlabSettings(themeSettings);
		
		/* To Set Sidebar left panel in the horizontal view */
		if(themeSettings.layout == 'horizontal'){
			jQuery('.wallet-bar').removeClass('active');
			jQuery('.wallet-open').removeClass('active');
		
		}else{
			jQuery('.wallet-bar').addClass('active');
			jQuery('.wallet-open').addClass('active');
		}
		
		setThemeInCookie(themeSettings);
	}
	
	function setThemeInCookie(themeSettings)
	{
		//console.log(themeSettings);
		jQuery.each(themeSettings, function(optionKey, optionValue) {
			setCookie(optionKey,optionValue);
		});
	}
	
	function setThemeLogo() {
		var logo = getCookie('logo_src');
		
		var logo2 = getCookie('logo_src2');
		
		if(logo != ''){
			jQuery('.nav-header .logo-abbr').attr("src", logo);
		}
		
		if(logo2 != ''){
			jQuery('.nav-header .logo-compact, .nav-header .brand-title').attr("src", logo2);
		}
	}
	
	function setThemeOptionOnPage(){
		if(getCookie('version') != '')
		{
			jQuery.each(themeOptionArr, function(optionKey, optionValue) {
				var optionData = getCookie(optionKey);
				themeOptionArr[optionKey] = (optionData != '')?optionData:dlabSettingsOptions[optionKey];
			});
			//console.log(themeOptionArr);
			dlabSettingsOptions = themeOptionArr;
			new dlabSettings(dlabSettingsOptions);
			
			setThemeLogo();
			
			
			/* To Set Sidebar left panel in the horizontal view */
			if(themeOptionArr.layout == 'horizontal'){
				jQuery('.wallet-bar').removeClass('active');
				jQuery('.wallet-open').removeClass('active');
			}else{
				jQuery('.wallet-bar').addClass('active');
				jQuery('.wallet-open').addClass('active');
			}
			
		}
	}
	
	
	/* set switcher option start */
	function getElementAttrs(el) {
	  return [].slice.call(el.attributes).map((attr) => {
		return {
		  name: attr.name,
		  value: attr.value
		}
	  });
	}
	
	function handleSetThemeOption(item, index, arr) {
		var attrName = item.name.replace('data-','').replace('-','_');
		if(attrName === "nav_headerbg" || attrName === "headerbg" || attrName === "sidebarbg" || attrName === "primary"){
			var attrNameColor = attrName.replace("bg","")
			document.getElementById(attrNameColor+"_"+item.value).checked = true;
		}else if(attrName === "direction"){
		}else if(jQuery(attrName).length > 0){
			document.getElementById(attrName).value = item.value;				
		}
		// $('.default-select').niceSelect('update');
	}
	
	/* set switcher option end */
	
	jQuery(document).on('click', '.dlab_theme_demo', function(){
		var demoTheme = jQuery(this).data('theme');
		themeChange(demoTheme, 'ltr');
		
		var allAttrs = getElementAttrs(document.querySelector('body'));
		allAttrs.forEach(handleSetThemeOption);
		
	});

	jQuery(document).on('click', '.dlab_theme_demo_rtl', function(){
		var demoTheme = jQuery(this).data('theme');
		themeChange(demoTheme, 'rtl');
	});
	
	
	jQuery(window).on('load', function(){
		var allAttrs = getElementAttrs(document.querySelector('body'));
		allAttrs.forEach(handleSetThemeOption);
		//direction = (direction != undefined)?direction:'ltr';
		if(theme != undefined){
			themeChange(theme);
		}else if(getCookie('version') == ''){	
				themeChange(0);
			
		}
		
		/* Set Theme On Page From Cookie */
		setThemeOptionOnPage();
	});
	jQuery(window).on('load', function(){
		//direction = (direction != undefined)?direction:'ltr';
		if(theme != undefined){
			themeChange(theme);
			
			/* Activate demo */
			jQuery('.dlab-demo-bx').removeClass('demo-active');
			jQuery('[data-theme="'+theme+'"]').parent().parent().addClass('demo-active');
			
		}else if(getCookie('version') == ''){	
				themeChange(0);
			
		}
		
		/* Set Theme On Page From Cookie */
		setThemeOptionOnPage();
		
	});
	jQuery(window).on('resize', function(){
		
		setThemeOptionOnPage();
	});
	

})(jQuery);
