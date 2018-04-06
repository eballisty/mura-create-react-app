# Configure Standalone 

### install mura js
```
npm install mura.js  
```

### Highlight Mura.JS

### Modify .env with
```
HOST=dream-cars.local.blueriver.com  
PORT=3000  
```

===================================
### install material ui
```
npm install material-ui@next  
```

### add Roboto font
```
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">  
```

### import material ui
```
// Material UI  
import {AppBar, Typography, Toolbar, GridList} from 'material-ui';  
```

### add Car component
```
// Custom component  
import Car from './components/Car';  
```
===================================

# Integrated with Mura

### add proxy
```
	"proxy": {  
	"/core": {  
		"target": "http://dream-cars.local.blueriver.com",  
		"changeOrigin": false  
	}
```

### add Mura JS to index.html
```
<script type="text/javascript" src="/core/modules/v1/core_assets/js/mura.min.js?v=7.1.188"></script>
<script type="text/javascript">
	Mura.init(
		{
			siteid:'default',
			rootpath:'http://dream-cars-backend.local.blueriver.com'
		}
	);
</script>
```
### Mura provides Mura JS, so reference it from the "window".
```
const Mura = window.Mura;
```

### Mura JS is already initialized
```
remove init() call
```
