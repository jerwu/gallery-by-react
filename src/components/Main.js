require('normalize.css/normalize.css');
require('styles/App.scss'); 

import React from 'react';

//获取图片相关的数据
var imageDatas = require('../data/imageDatas.json');

//利用自执行函数，将图片名信息转成图片URL路径信息
imageDatas=(function genImageURL(imageDatasArr){
	for(var i = 0,j = imageDatas.length;i < j;i++){
		var singleImageData=imageDatasArr[i];
		singleImageData.imageURL=require("../images/"+singleImageData.fileName);
		imageDatasArr[i]=singleImageData;
	}
	return imageDatasArr;
})(imageDatas);

var ImgFigure = React.createClass({
	constant:{
		centerPos:{
			left:0,
			right:0
		},
		hPosRange:{		//水平方向的取值范围(左右分区)
			leftSecX:[0,0],
			rightSecX:[0,0],
			y:[0,0]
		},
		vPosRange:{ 	//垂直方向上的取值范围(上分区)
			x:[0,0],
			topY:[0,0]
		}
	}

	render:function(){
		return (
			<figure className="img-figure">
				<img src={this.props.data.imageURL} alt={this.props.data.title}/>
				<figCaption>
					<h2 className="img-title">{this.props.data.title}</h2>
				</figCaption>
			</figure>
		);
	}
})

class AppComponent extends React.Component {
  render() {
  	let controllerUnits = [],
    		imgFigures=[];

    imageDatas.forEach(value => imgFigures.push(<ImgFigure data={value}/>));

    return (
      	<section className="stage">
      		<section className="img-sec">
      			{imgFigures}
      		</section>
      		<nav className="controller-nav">
      			{controllerUnits}
      		</nav>
      	</section>
    );
  }
}

AppComponent.defaultProps = {
	// controllerUnits:"[]",
 //    imgFigures="[]",
 //    imageDatas:function(){
 //    	return imageDatas.foreach(value => imgFigures.push(<ImgFigure data={value}/>));
 //    }
};

export default AppComponent;
