/*
############################################
	作者: COBRA
	改造や配布好き勝手にしても大丈夫だよ
	寧ろ積極的に配布して皆のゲーム開発を快適にしてあげて
	http://cobrara.blogspot.jp/
############################################
*/

// Version 2.1.2
// 2016/8/17 2.1.2 CBR_eroSta_txtSubjectChangeで変更した箇所をセーブできるようにしました
// 2016/8/7 2.1.1 単位がおかしくなってたバグを修正 
// 2016/8/5 2.1.0 スクリプトでtxtSubjectを変更できるようにしました
// 2016/8/4 2.0.0 もう根本的に色々と使う側の事考えて無かったので作り直し、画像 5→20、文字 15→30、画像は変数対応そしてプラグインのコマンド名とか色々変更
// 2016/8/1 1.0.0

/*:
* @plugindesc エロステータス作れちゃうプラグイン
* @author COBRA
* @help Version 2.1.2
* 自由にいじれちゃうエロステータス画面
*
* ピクチャの位置は自由に配置できます
* 画像はimg/picturesにpngで保存してください
*
* エロステータス画面のサイズは
* width : 816
* height : 624
*
* 左にテキスト、右に変数って感じ
* 変数を非表示にしたい場合は0にしてね
*
* 追伸
* もっと自由に色々とフォントサイズとか位置指定したいなーと思ったらstatusEXっての作ってるんで
* 完成したらそっち使ってね
*
*
* @param EroStaName
* @desc メニューに表示される名前だよ
* Default: 開発度
* @default 開発度
*
*
* @param
*
*
* @param #### ピクチャ1 ####
* @default 
*
* @param picName_1
* @desc 表示したいピクチャの名前
* Default: 空っぽにすれば表示されないよ
* @default
*
* @param picVar_1
* @desc ピクチャ名の後ろにつける変数
* Default: 0
* @default 0
*
* @param picX_1
* @desc ピクチャのX座標
* Default: 0
* @default 0
*
* @param picY_1
* @desc ピクチャのY座標
* Default: 0
* @default 0
*
* @param picZoom_1
* @desc ピクチャ拡大率
* Default: 1
* @default 1
*
*
* @param
*
* @param #### ピクチャ2 ####
* @default 
*
* @param picName_2
* @desc 表示したいピクチャの名前
* Default: 空っぽにすれば表示されないよ
* @default
*
* @param picVar_2
* @desc ピクチャ名の後ろにつける変数
* Default: 0
* @default 0
*
* @param picX_2
* @desc ピクチャのX座標
* Default: 0
* @default 0
*
* @param picY_2
* @desc ピクチャのY座標
* Default: 0
* @default 0
*
* @param picZoom_2
* @desc ピクチャ拡大率
* Default: 1
* @default 1
*
*
* @param
*
* @param #### ピクチャ3 ####
* @default 
*
* @param picName_3
* @desc 表示したいピクチャの名前
* Default: 空っぽにすれば表示されないよ
* @default
*
* @param picVar_3
* @desc ピクチャ名の後ろにつける変数
* Default: 0
* @default 0
*
* @param picX_3
* @desc ピクチャのX座標
* Default: 0
* @default 0
*
* @param picY_3
* @desc ピクチャのY座標
* Default: 0
* @default 0
*
* @param picZoom_3
* @desc ピクチャ拡大率
* Default: 1
* @default 1
*
*
* @param
*
* @param #### ピクチャ4 ####
* @default 
*
* @param picName_4
* @desc 表示したいピクチャの名前
* Default: 空っぽにすれば表示されないよ
* @default
*
* @param picVar_4
* @desc ピクチャ名の後ろにつける変数
* Default: 0
* @default 0
*
* @param picX_4
* @desc ピクチャのX座標
* Default: 0
* @default 0
*
* @param picY_4
* @desc ピクチャのY座標
* Default: 0
* @default 0
*
* @param picZoom_4
* @desc ピクチャ拡大率
* Default: 1
* @default 1
*
*
* @param
*
* @param #### ピクチャ5 ####
* @default 
*
* @param picName_5
* @desc 表示したいピクチャの名前
* Default: 空っぽにすれば表示されないよ
* @default
*
* @param picVar_5
* @desc ピクチャ名の後ろにつける変数
* Default: 0
* @default 0
*
* @param picX_5
* @desc ピクチャのX座標
* Default: 0
* @default 0
*
* @param picY_5
* @desc ピクチャのY座標
* Default: 0
* @default 0
*
* @param picZoom_5
* @desc ピクチャ拡大率
* Default: 1
* @default 1
*
*
* @param
*
* @param #### ピクチャ6 ####
* @default 
*
* @param picName_6
* @desc 表示したいピクチャの名前
* Default: 空っぽにすれば表示されないよ
* @default
*
* @param picVar_6
* @desc ピクチャ名の後ろにつける変数
* Default: 0
* @default 0
*
* @param picX_6
* @desc ピクチャのX座標
* Default: 0
* @default 0
*
* @param picY_6
* @desc ピクチャのY座標
* Default: 0
* @default 0
*
* @param picZoom_6
* @desc ピクチャ拡大率
* Default: 1
* @default 1
*
*
* @param
*
* @param #### ピクチャ7 ####
* @default 
*
* @param picName_7
* @desc 表示したいピクチャの名前
* Default: 空っぽにすれば表示されないよ
* @default
*
* @param picVar_7
* @desc ピクチャ名の後ろにつける変数
* Default: 0
* @default 0
*
* @param picX_7
* @desc ピクチャのX座標
* Default: 0
* @default 0
*
* @param picY_7
* @desc ピクチャのY座標
* Default: 0
* @default 0
*
* @param picZoom_7
* @desc ピクチャ拡大率
* Default: 1
* @default 1
*
*
* @param
*
* @param #### ピクチャ8 ####
* @default 
*
* @param picName_8
* @desc 表示したいピクチャの名前
* Default: 空っぽにすれば表示されないよ
* @default
*
* @param picVar_8
* @desc ピクチャ名の後ろにつける変数
* Default: 0
* @default 0
*
* @param picX_8
* @desc ピクチャのX座標
* Default: 0
* @default 0
*
* @param picY_8
* @desc ピクチャのY座標
* Default: 0
* @default 0
*
* @param picZoom_8
* @desc ピクチャ拡大率
* Default: 1
* @default 1
*
*
* @param
*
* @param #### ピクチャ9 ####
* @default 
*
* @param picName_9
* @desc 表示したいピクチャの名前
* Default: 空っぽにすれば表示されないよ
* @default
*
* @param picVar_9
* @desc ピクチャ名の後ろにつける変数
* Default: 0
* @default 0
*
* @param picX_9
* @desc ピクチャのX座標
* Default: 0
* @default 0
*
* @param picY_9
* @desc ピクチャのY座標
* Default: 0
* @default 0
*
* @param picZoom_9
* @desc ピクチャ拡大率
* Default: 1
* @default 1
*
*
* @param
*
* @param #### ピクチャ10 ####
* @default 
*
* @param picName_10
* @desc 表示したいピクチャの名前
* Default: 空っぽにすれば表示されないよ
* @default
*
* @param picVar_10
* @desc ピクチャ名の後ろにつける変数
* Default: 0
* @default 0
*
* @param picX_10
* @desc ピクチャのX座標
* Default: 0
* @default 0
*
* @param picY_10
* @desc ピクチャのY座標
* Default: 0
* @default 0
*
* @param picZoom_10
* @desc ピクチャ拡大率
* Default: 1
* @default 1
*
*
* @param
*
* @param #### ピクチャ11 ####
* @default 
*
* @param picName_11
* @desc 表示したいピクチャの名前
* Default: 空っぽにすれば表示されないよ
* @default
*
* @param picVar_11
* @desc ピクチャ名の後ろにつける変数
* Default: 0
* @default 0
*
* @param picX_11
* @desc ピクチャのX座標
* Default: 0
* @default 0
*
* @param picY_11
* @desc ピクチャのY座標
* Default: 0
* @default 0
*
* @param picZoom_11
* @desc ピクチャ拡大率
* Default: 1
* @default 1
*
*
* @param
*
* @param #### ピクチャ12 ####
* @default 
*
* @param picName_12
* @desc 表示したいピクチャの名前
* Default: 空っぽにすれば表示されないよ
* @default
*
* @param picVar_12
* @desc ピクチャ名の後ろにつける変数
* Default: 0
* @default 0
*
* @param picX_12
* @desc ピクチャのX座標
* Default: 0
* @default 0
*
* @param picY_12
* @desc ピクチャのY座標
* Default: 0
* @default 0
*
* @param picZoom_12
* @desc ピクチャ拡大率
* Default: 1
* @default 1
*
*
* @param
*
* @param #### ピクチャ13 ####
* @default 
*
* @param picName_13
* @desc 表示したいピクチャの名前
* Default: 空っぽにすれば表示されないよ
* @default
*
* @param picVar_13
* @desc ピクチャ名の後ろにつける変数
* Default: 0
* @default 0
*
* @param picX_13
* @desc ピクチャのX座標
* Default: 0
* @default 0
*
* @param picY_13
* @desc ピクチャのY座標
* Default: 0
* @default 0
*
* @param picZoom_13
* @desc ピクチャ拡大率
* Default: 1
* @default 1
*
*
* @param
*
* @param #### ピクチャ14 ####
* @default 
*
* @param picName_14
* @desc 表示したいピクチャの名前
* Default: 空っぽにすれば表示されないよ
* @default
*
* @param picVar_14
* @desc ピクチャ名の後ろにつける変数
* Default: 0
* @default 0
*
* @param picX_14
* @desc ピクチャのX座標
* Default: 0
* @default 0
*
* @param picY_14
* @desc ピクチャのY座標
* Default: 0
* @default 0
*
* @param picZoom_14
* @desc ピクチャ拡大率
* Default: 1
* @default 1
*
*
* @param
*
* @param #### ピクチャ15 ####
* @default 
*
* @param picName_15
* @desc 表示したいピクチャの名前
* Default: 空っぽにすれば表示されないよ
* @default
*
* @param picVar_15
* @desc ピクチャ名の後ろにつける変数
* Default: 0
* @default 0
*
* @param picX_15
* @desc ピクチャのX座標
* Default: 0
* @default 0
*
* @param picY_15
* @desc ピクチャのY座標
* Default: 0
* @default 0
*
* @param picZoom_15
* @desc ピクチャ拡大率
* Default: 1
* @default 1
*
*
* @param
*
* @param #### ピクチャ16 ####
* @default 
*
* @param picName_16
* @desc 表示したいピクチャの名前
* Default: 空っぽにすれば表示されないよ
* @default
*
* @param picVar_16
* @desc ピクチャ名の後ろにつける変数
* Default: 0
* @default 0
*
* @param picX_16
* @desc ピクチャのX座標
* Default: 0
* @default 0
*
* @param picY_16
* @desc ピクチャのY座標
* Default: 0
* @default 0
*
* @param picZoom_16
* @desc ピクチャ拡大率
* Default: 1
* @default 1
*
*
* @param
*
* @param #### ピクチャ17 ####
* @default 
*
* @param picName_17
* @desc 表示したいピクチャの名前
* Default: 空っぽにすれば表示されないよ
* @default
*
* @param picVar_17
* @desc ピクチャ名の後ろにつける変数
* Default: 0
* @default 0
*
* @param picX_17
* @desc ピクチャのX座標
* Default: 0
* @default 0
*
* @param picY_17
* @desc ピクチャのY座標
* Default: 0
* @default 0
*
* @param picZoom_17
* @desc ピクチャ拡大率
* Default: 1
* @default 1
*
*
* @param
*
* @param #### ピクチャ18 ####
* @default 
*
* @param picName_18
* @desc 表示したいピクチャの名前
* Default: 空っぽにすれば表示されないよ
* @default
*
* @param picVar_18
* @desc ピクチャ名の後ろにつける変数
* Default: 0
* @default 0
*
* @param picX_18
* @desc ピクチャのX座標
* Default: 0
* @default 0
*
* @param picY_18
* @desc ピクチャのY座標
* Default: 0
* @default 0
*
* @param picZoom_18
* @desc ピクチャ拡大率
* Default: 1
* @default 1
*
*
* @param
*
* @param #### ピクチャ19 ####
* @default 
*
* @param picName_19
* @desc 表示したいピクチャの名前
* Default: 空っぽにすれば表示されないよ
* @default
*
* @param picVar_19
* @desc ピクチャ名の後ろにつける変数
* Default: 0
* @default 0
*
* @param picX_19
* @desc ピクチャのX座標
* Default: 0
* @default 0
*
* @param picY_19
* @desc ピクチャのY座標
* Default: 0
* @default 0
*
* @param picZoom_19
* @desc ピクチャ拡大率
* Default: 1
* @default 1
*
*
* @param
*
* @param #### ピクチャ20 ####
* @default 
*
* @param picName_20
* @desc 表示したいピクチャの名前
* Default: 空っぽにすれば表示されないよ
* @default
*
* @param picVar_20
* @desc ピクチャ名の後ろにつける変数
* Default: 0
* @default 0
*
* @param picX_20
* @desc ピクチャのX座標
* Default: 0
* @default 0
*
* @param picY_20
* @desc ピクチャのY座標
* Default: 0
* @default 0
*
* @param picZoom_20
* @desc ピクチャ拡大率
* Default: 1
* @default 1
*
*
*
* @param
*
* @param #### エロステ1 ####
* @default 
*
* @param txtSubject_1
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_1
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_1
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_1
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_1
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_1
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_1
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_1
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_1
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_1
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ2 ####
* @default 
*
* @param txtSubject_2
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_2
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_2
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_2
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_2
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_2
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_2
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_2
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_2
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_2
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ3 ####
* @default 
*
* @param txtSubject_3
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_3
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_3
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_3
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_3
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_3
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_3
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_3
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_3
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_3
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ4 ####
* @default 
*
* @param txtSubject_4
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_4
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_4
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_4
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_4
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_4
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_4
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_4
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_4
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_4
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ5 ####
* @default 
*
* @param txtSubject_5
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_5
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_5
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_5
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_5
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_5
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_5
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_5
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_5
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_5
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ6 ####
* @default 
*
* @param txtSubject_6
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_6
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_6
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_6
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_6
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_6
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_6
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_6
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_6
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_6
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ7 ####
* @default 
*
* @param txtSubject_7
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_7
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_7
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_7
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_7
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_7
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_7
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_7
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_7
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_7
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ8 ####
* @default 
*
* @param txtSubject_8
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_8
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_8
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_8
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_8
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_8
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_8
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_8
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_8
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_8
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ9 ####
* @default 
*
* @param txtSubject_9
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_9
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_9
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_9
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_9
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_9
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_9
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_9
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_9
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_9
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ10 ####
* @default 
*
* @param txtSubject_10
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_10
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_10
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_10
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_10
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_10
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_10
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_10
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_10
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_10
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ11 ####
* @default 
*
* @param txtSubject_11
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_11
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_11
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_11
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_11
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_11
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_11
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_11
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_11
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_11
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ12 ####
* @default 
*
* @param txtSubject_12
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_12
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_12
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_12
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_12
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_12
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_12
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_12
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_12
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_12
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ13 ####
* @default 
*
* @param txtSubject_13
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_13
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_13
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_13
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_13
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_13
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_13
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_13
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_13
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_13
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ14 ####
* @default 
*
* @param txtSubject_14
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_14
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_14
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_14
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_14
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_14
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_14
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_14
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_14
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_14
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ15 ####
* @default 
*
* @param txtSubject_15
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_15
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_15
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_15
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_15
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_15
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_15
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_15
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_15
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_15
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ16 ####
* @default 
*
* @param txtSubject_16
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_16
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_16
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_16
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_16
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_16
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_16
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_16
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_16
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_16
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ17 ####
* @default 
*
* @param txtSubject_17
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_17
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_17
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_17
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_17
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_17
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_17
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_17
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_17
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_17
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ18 ####
* @default 
*
* @param txtSubject_18
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_18
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_18
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_18
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_18
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_18
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_18
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_18
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_18
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_18
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ19 ####
* @default 
*
* @param txtSubject_19
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_19
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_19
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_19
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_19
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_19
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_19
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_19
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_19
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_19
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ20 ####
* @default 
*
* @param txtSubject_20
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_20
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_20
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_20
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_20
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_20
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_20
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_20
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_20
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_20
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ21 ####
* @default 
*
* @param txtSubject_21
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_21
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_21
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_21
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_21
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_21
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_21
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_21
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_21
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_21
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ22 ####
* @default 
*
* @param txtSubject_22
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_22
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_22
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_22
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_22
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_22
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_22
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_22
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_22
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_22
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ23 ####
* @default 
*
* @param txtSubject_23
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_23
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_23
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_23
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_23
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_23
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_23
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_23
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_23
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_23
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ24 ####
* @default 
*
* @param txtSubject_24
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_24
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_24
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_24
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_24
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_24
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_24
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_24
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_24
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_24
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ25 ####
* @default 
*
* @param txtSubject_25
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_25
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_25
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_25
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_25
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_25
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_25
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_25
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_25
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_25
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ26 ####
* @default 
*
* @param txtSubject_26
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_26
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_26
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_26
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_26
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_26
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_26
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_26
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_26
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_26
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ27 ####
* @default 
*
* @param txtSubject_27
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_27
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_27
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_27
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_27
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_27
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_27
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_27
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_27
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_27
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ28 ####
* @default 
*
* @param txtSubject_28
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_28
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_28
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_28
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_28
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_28
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_28
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_28
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_28
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_28
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ29 ####
* @default 
*
* @param txtSubject_29
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_29
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_29
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_29
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_29
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_29
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_29
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_29
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_29
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_29
* @desc 左から右まで
* Default: 300
* @default 300
*
*
* @param
*
* @param #### エロステ30 ####
* @default 
*
* @param txtSubject_30
* @desc テキスト、CBR_OFFにするとこの行全体が表示されなくなります
* Default: CBR_OFF
* @default CBR_OFF
*
* @param txtSubjectColor_30
* @desc フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtVar_30
* @desc 表示する変数のナンバー
* Default: 0
* @default 0
*
* @param txtVarColor_30
* @desc 変数フォントの色だよ
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtUnit_30
* @desc 変数の右に表示したいテキスト
* Default:なし
* @default
*
* @param txtUnitColor_30
* @desc 変数の右に表示したいテキスト
* Default: #FFFFFF
* @default #FFFFFF
*
* @param txtFontSize_30
* @desc フォントのサイズ
* Default: 28
* @default 28
*
* @param txtX_30
* @desc 表示するX座標
* Default: 0
* @default 0
*
* @param txtY_30
* @desc 表示するY座標
* Default: 0
* @default 0
*
* @param txtWidth_30
* @desc 左から右まで
* Default: 300
* @default 300
*
*
*/


var parameters = PluginManager.parameters('CBR_status_light');
paramMenuName = ''+(parameters['EroStaName'] || '開発度');


var _CBR_Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function(){
	_CBR_Game_System_initialize.call(this);

	//ピクチャの取得
	this._CBR_eroSta_pic_list = [];
	for(var i=1; i<=20; i++){
		var p =parameters['picName_'+i];
		if(p && p != 'CBR_OFF'){
			this._CBR_eroSta_pic_list.push({
				'name':p,
				'var':Number(parameters['picVar_'+i] || 0),
				'x':Number(parameters['picX_'+i] || 0),
				'y':Number(parameters['picY_'+i] || 0),
				'zoom':Number(parameters['picZoom_'+i] || 1)
			});
		}
	}

	//テキストの取得
	this._CBR_eroSta_text_list = [];
	for(var i=1; i<=30; i++){
		if(parameters['txtSubject_'+i] != 'CBR_OFF'){
			this._CBR_eroSta_text_list.push({
				'number':i,
				'fontSize':Number(parameters['txtFontSize_'+i] || 28),
				'x':Number(parameters['txtX_'+i] || 0),
				'y':Number(parameters['txtY_'+i] || 0),
				'width':Number(parameters['txtWidth_'+i] || 300),

				'subject':''+(parameters['txtSubject_'+i] || ''),
				'subjectColor':''+(parameters['txtSubjectColor_'+i] || '#FFFFFF'),
				'var':Number(parameters['txtVar_'+i] || i),
				'varColor':''+(parameters['txtVarColor_'+i] || '#FFFFFF'),
				'unit':''+(parameters['txtUnit_'+i] || ''),
				'unitColor':''+(parameters['txtUnitColor_'+i] || '#FFFFFF')
			});
		}
	}
}


Game_System.prototype.CBR_eroSta_pic_list = function(){
	return this._CBR_eroSta_pic_list;
}
Game_System.prototype.CBR_eroSta_text_list = function(){
	return this._CBR_eroSta_text_list;
};

Game_System.prototype.CBR_eroSta_txtSubjectChange = function(num,sbj,color){
	var ary = this.CBR_eroSta_text_list();
	for(var i=0,len=ary.length; i<len; i++){
		if(ary[i].number == num){
			this._CBR_eroSta_text_list[i].subject = sbj;
			if(color){
				this._CBR_eroSta_text_list[i].subjectColor = color;
			}
		}
	}
};


//########### Scene ###########
function Scene_EroStatus() {
	this.initialize.apply(this, arguments);
}
Scene_EroStatus.prototype = Object.create(Scene_MenuBase.prototype);
Scene_EroStatus.prototype.constructor = Scene_EroStatus;

Scene_EroStatus.prototype.initialize = function() {
	Scene_MenuBase.prototype.initialize.call(this);
};
Scene_EroStatus.prototype.create = function() {
	Scene_MenuBase.prototype.create.call(this);
	this._eroStatusWindow = new Window_EroStatus();
	this._eroStatusWindow.setHandler('cancel',   this.popScene.bind(this));

	this._eroStatusWindow._margin = 0;//背景ピッチリする為
	this._eroStatusWindow.margin = 0;//本当はこっちだけどね
	this._eroStatusWindow._windowFrameSprite.visible = false;//枠線を消す

	this.addWindow(this._eroStatusWindow);
};

//########### window ###########
function Window_EroStatus() {
	this.initialize.apply(this, arguments);
}

Window_EroStatus.prototype = Object.create(Window_Selectable.prototype);
Window_EroStatus.prototype.constructor = Window_EroStatus;

Window_EroStatus.prototype.initialize = function() {
	var width = Graphics.boxWidth;
	var height = Graphics.boxHeight;
	Window_Selectable.prototype.initialize.call(this, 0, 0, width, height);

	this._CBR_complete = false;
};

Window_EroStatus.prototype.CBR_complete = function(){//描写終わったかどうか
	return this._CBR_complete;
}

Window_EroStatus.prototype.update = function() {//毎回image描写してもいいけどそれだと負荷が多くなるのでこの方法で
	Window_Selectable.prototype.update.call(this);
	
	if(!this.CBR_complete()){//まだ画像の描写してないのなら
		var flag = false;
		var ary = $gameSystem.CBR_eroSta_pic_list();
		for(var i=0,len=ary.length; i<len; i++){
			var name = ary[i].name;
			if(ary[i].var){//変数があったら入れる
				name += $gameVariables.value(ary[i].var);
			}
			var temp = ImageManager.loadPicture(name);//初回読み込み
			if(temp){
				if(temp._isLoading){//ロード中ならアウト
					flag = true;
					break;
				}
			}else{//その名前の画像が無かったら
				flag = true;
				this._CBR_complete = true;
				break;
			}
		}
		if(!flag){//全ロードが終わってたら
			this.contents.clear();

			//ピクチャの表示
			var ary = $gameSystem.CBR_eroSta_pic_list();
			for(var i=0,len=ary.length; i<len; i++){
				var name = ary[i].name;
				if(ary[i].var){//変数があったら入れる
					name += $gameVariables.value(ary[i].var);
				}
				this.drawPicture('pictures',name, 0,0,ary[i].x,ary[i].y,0,0,ary[i].zoom,0);
			}
	
			//テキストの表示
			this.resetTextColor();
			var ary = $gameSystem.CBR_eroSta_text_list();
			for(var i=0,len=ary.length; i<len; i++){
				this.contents.fontSize =ary[i].fontSize;
				if(ary[i].subject){
					this.changeTextColor(ary[i].subjectColor);
					this.drawText(ary[i].subject,ary[i].x, ary[i].y, ary[i].width, 'left');
				}
				if(ary[i].var){
					var w = 0;
					if(ary[i].unit){//単位がある場合
						//横幅を計測、canvasのmakefont使う
						this.contents.context.save();
						this.contents.context.font = this.contents._makeFontNameText();
						w = this.contents.context.measureText(ary[i].unit).width + 4;
						this.contents.context.restore();

						this.changeTextColor(ary[i].unitColor);
						this.drawText(ary[i].unit,ary[i].x, ary[i].y, ary[i].width, 'right');
					}
					this.changeTextColor(ary[i].varColor);
					this.drawText($gameVariables.value(ary[i].var),ary[i].x, ary[i].y, ary[i].width - w, 'right');
				}
				this.contents.fontSize =this.standardFontSize();
				this.resetTextColor();
			}
			this.activate();
			this._CBR_complete = true;
		}
	}

};

Window_EroStatus.prototype.drawPicture = function(dir, filename,sx, sy, x, y, w, h, zoom, hue) {
	var bitmap = ImageManager.loadBitmap('img/'+dir+'/',filename, hue, true);
	this.contents.blt(bitmap, sx, sy, bitmap.width, bitmap.height, x, y, bitmap.width * zoom, bitmap.height * zoom);
};
Window_EroStatus.prototype.standardPadding =function(){
	return 0;
};
Window_Status.prototype.lineColor = function() {
	return this.normalColor();
};
Window_Status.prototype.maxEquipmentLines = function() {
	return 6;
};



//#########　コマンドの追加　##########
var _Scene_Menu_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function() {
	_Scene_Menu_createCommandWindow.call(this);
	this._commandWindow.setHandler('EroStatus', this.commandEroSta.bind(this));
};
Scene_Menu.prototype.commandEroSta = function() {
	SceneManager.push(Scene_EroStatus);
};
Window_MenuCommand.prototype.addOriginalCommands = function() {
	if (paramMenuName) {
		this.addCommand(paramMenuName, 'EroStatus', true);
	}
};
