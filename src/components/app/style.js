// @font-face {
//     font-family: AcrobatBold;
//     src: url('../../Fonts/Akrobat-Bold.otf');
//   }
//   @font-face {
//     font-family: AcrobatLight;
//     src: url('../../Fonts/Akrobat-Light.otf');
//   }
  
//   @font-face {
//     font-family: AcrobatExtraBold;
//     src: url('../../Fonts/Akrobat-ExtraBold.otf');
//   }
  
//   @font-face {
//     font-family: AcrobatSemiBold;
//     src: url('../../Fonts/Akrobat-SemiBold.otf');
//   }
  
  
  
//   @font-face {
//     font-family: AcrobatRegular;
//     src: url('../../Fonts/Akrobat-Regular.otf');
//   }

   
//   @font-face {
//     font-family: AcrobatBlack;
//     src: url('../../Fonts/Akrobat-Black.otf');
//   }
.ViewEmployeesHeading{
    display: inline
}
.ViewSalaryButton{
    float: right !important;
    height: 10px;
}

.SalaryViewChildDiv1{
    width: 21.25%;
    margin-right: 2.5%;
}
.SalaryViewChildDiv2{
    width: 21.25%;
    margin-left: 2.5%;
    margin-right: 2.5%;
}.SalaryViewChildDiv3{
    width: 21.25%;
    margin-left: 2.5%;
    margin-right: 2.5%;
}.SalaryViewChildDiv4{
    width: 21.25%;
    margin-left: 2.5%;
}
.viewEmployeesCard{
    padding: 10px;
    
}

.mapCardHEd{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

}

.CardHead{
    text-align: center;
    font-size: 24px;
    font-family: AcrobatBlack;
    font-weight: 300;
    color: rgb(63, 77, 88)
    
}

.CardButton1Style{
    display: inline;
}

.CardButton2Style{
    display: inline;
    float: right
}
.CardPara{
    text-align: center;
    font-size: 14px;
    color: rgb(102, 102, 102);
    font-family: AcrobatBold;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.CardButtonMainDiv{

    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
}

.CardButtonMainDivChild1{
    width: 40%;
    margin-right: 40%;
    /* margin-right: 5% */
}
.CardButtonMainDivChild2{
    width: 20%;
}
.CardButtonMainDivChild2>.btnFontColor{
    float: right;
}

.marginbottomChildDiv4{
    margin-bottom: 4%;
}

@media(max-width:1350px){
    .CardButtonMainDivChild1{
        width: 100% !important;
        margin-right: 0% !important ;
    }
    .CardButtonMainDivChild2{
        width: 100% !important;
        margin-top: 1%
    }
}

@media(max-width:660px){

    div>div>div>.employeesviewMobileView{
        margin-bottom: 20px
    }
div>div>div>.SalaryViewChildDiv1{
    width: 47.5% !important;
    margin-left: 0% !important;
    margin-right: 2.5% !important;
}

div>div>div>.SalaryViewChildDiv2{
    width: 47.5% !important;
    margin-left: 2.5% !important;
    margin-right: 0% !important;
}


div>div>div>.SalaryViewChildDiv3{
    width: 47.5% !important;
    margin-left: 0% !important;
    margin-right: 2.5% !important;
    margin-top: 4%
}

div>div>div>.SalaryViewChildDiv4{
    width: 47.5% !important;
    margin-left: 2.5% !important;
    margin-right: 0% !important;
    margin-top: 4%    
}
}
.sidebarListFirstTwoLi:hover{
    color: #3eb097 !important;
    cursor: pointer
}
    .sidebarListLastLi:hover{
        color: #3eb097 !important;
        cursor: pointer
    }



    .AddEmployeeMainDiv{
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    }



 @media(max-width:660px){
  div>  .employessViewSideMainBodyPaddingBottom{
        padding-bottom: 9%
    }
 }
 @media(max-width:460px){
  div>  div>  .employessViewSideMainBodyPaddingBottom{
          padding-bottom: 15%
      }
   }

   .dynamicEmployeeClass{
       margin-bottom: 2%
   }

   .avatartImg:hover{
cursor: pointer
   }



   @-webkit-keyframes placeHolderShimmer {
    0% {
      background-position: -468px 0
    }
    100% {
      background-position: 468px 0
    }
  }
  
  @keyframes placeHolderShimmer {
    0% {
      background-position: -468px 0
    }
    100% {
      background-position: 1078px 0px;
  }
  }
  
  .timeline-wrapper {
    background-color: #e9eaed;
    color: #141823;
    padding: 20px;
    border: 1px solid #ccc;
  }
  
  .timeline-item {
    background: #fff;
    border-radius: 3px;
    padding: 12px;
    margin: 0 auto;
    /* max-width: 472px; */
    min-height: 200px;
    margin-top: 2%;
  }
  
  .animated-background {
    -webkit-animation-duration: 1s;
    animation-duration: 2s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-name: placeHolderShimmer;
    animation-name: placeHolderShimmer;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    background: #f6f7f8;
    background: #eeeeee;
    background: -webkit-gradient(linear, left top, right top, color-stop(8%, #eeeeee), color-stop(18%, #dddddd), color-stop(33%, #eeeeee));
    background: -webkit-linear-gradient(left, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    -webkit-background-size: 800px 104px;
    background-size: 800px 104px;
    height: 300px;
    position: relative;
  }
  
  .background-masker {
    background: #fff;
    position: absolute;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  .outlined .background-masker {
    border: 1px solid #ddd;
  }
  
  .outlined:hover .background-masker {
    border: none;
  }
  
  .outlined:hover .background-masker:hover {
    border: 1px solid #ccc;
    z-index: 1;
  }
  
  .background-masker.header-top,
  .background-masker.header-bottom,
  .background-masker.subheader-bottom {
    top: 0;
    left: 40px;
    right: 0;
    height: 10px;
  }
  
  .background-masker.header-left,
  .background-masker.subheader-left,
  .background-masker.header-right,
  .background-masker.subheader-right {
    top: 10px;
    left: 40px;
    height: 8px;
    width: 10px;
  }
  
  .background-masker.header-bottom {
    top: 18px;
    height: 6px;
  }
  
  .background-masker.subheader-left,
  .background-masker.subheader-right {
    top: 24px;
    height: 6px;
  }
  
  .background-masker.header-right,
  .background-masker.subheader-right {
    width: auto;
    left: 300px;
    right: 0;
  }
  
  .background-masker.subheader-right {
    left: 230px;
  }
  
  .background-masker.subheader-bottom {
    top: 30px;
    height: 10px;
  }
  
  .background-masker.content-top,
  .background-masker.content-second-line,
  .background-masker.content-third-line,
  .background-masker.content-second-end,
  .background-masker.content-third-end,
  .background-masker.content-first-end {
    top: 250px;
    left: 0;
    right: 0;
    height: 25px;
  }

  
  .background-masker.content-top {
    height: 20px;
  }
  
  .background-masker.content-first-end,
  .background-masker.content-second-end,
  .background-masker.content-third-end {
    width: auto;
    left: 380px;
    right: 0;
    top: 60px;
    height: 8px;
  }
  
  .background-masker.content-second-line {
    top: 190px;
  }
  
  .background-masker.content-second-end {
    left: 420px;
    top: 74px;
  }
  
  .background-masker.content-third-line {
    top: 220px;
  }
  
  .background-masker.content-third-end {
    left: 300px;
    top: 8px;
  }

  .dot{
      font-size: 0px;
  }


  @media(max-width:1125px){
  div>  .background-masker.content-second-line{
    top: 155px
  }
  div>.background-masker.content-third-line {
    top: 185px;
  }

  div>.background-masker.content-top{
    top: 215px
  }
  div>.animated-background{
    height: 265px;
  }
  }


  .employeesactivecolor{
    color:#3eb097 !important
  }


 div>div>.MainBodyPaddingTopNone{
    padding-top: 0 !important
  }