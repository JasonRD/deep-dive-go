

[rewrite_local]

# ～ RevenueCat@ddgksf2013
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-echo-response https://gist.githubusercontent.com/ddgksf2013/dbb1695cd96743eef18f3fac5c6fe227/raw/revenuecat.js
^https:\/\/api\.revenuecat\.com\/.+\/subscribers\/[^/]+/(offerings|attributes)$ url request-header (\r\n)X-RevenueCat-ETag:.+(\r\n) request-header $1X-RevenueCat-ETag:$2

[mitm]

hostname=api.revenuecat.com

***********************************/




//固定头部, tg频道：https://t.me/ddgksf2021

var ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
var cuttlefish = {"Attention":"恭喜你抓到元数据！由墨鱼分享，请勿售卖或分享他人！","request_date_ms":1662599120248,"request_date":"2022-09-08T01:05:20Z","subscriber":{"non_subscriptions":{},"first_seen":"2022-09-08T01:04:03Z","original_application_version":"8","other_purchases":{},"management_url":"https://apps.apple.com/account/subscriptions","subscriptions":{},"entitlements":{},"original_purchase_date":"2022-09-07T13:05:43Z","original_app_user_id":"$RCAnonymousID:ddgksf2013","last_seen":"2022-09-08T01:04:03Z"}};
var ddgksf2013={"is_sandbox":false,"ownership_type":"PURCHASED","billing_issues_detected_at":null,"period_type":"normal","expires_date":"2099-12-18T01:04:17Z","grace_period_expires_date":null,"unsubscribe_detected_at":null,"original_purchase_date":"2022-09-08T01:04:18Z","purchase_date":"2022-09-08T01:04:17Z","store":"app_store"};
var ddgksf2021={"grace_period_expires_date":null,"purchase_date":"2022-09-08T01:04:17Z","product_identifier":"ddgksf2013_1y_128","expires_date":"2099-12-18T01:04:17Z"};
var obj = JSON.parse(JSON.stringify(cuttlefish));ddgksf2021['product_identifier']="com.ddgksf2013.premium.yearly";obj['subscriber']['subscriptions']['com.ddgksf2013.premium.yearly']=ddgksf2013;

// ========= 动态ID ========= //
if(ua.indexOf('%E8%BD%A6%E7%A5%A8%E7%A5%A8') != -1) {obj['subscriber']['entitlements']['vip+watch_vip']=ddgksf2021;}
else if(ua.indexOf('LUTCamera') != -1) {ddgksf2021['product_identifier']="com.uzero.funforcam.monthlysub";obj['subscriber']['entitlements']['ProVersion']=ddgksf2021;obj['subscriber']['subscriptions']['com.uzero.funforcam.monthlysub']=ddgksf2013;}
else if(ua.indexOf('totowallet') != -1) {ddgksf2021['product_identifier']="com.ziheng.totowallet.yearly";obj['subscriber']['entitlements']['all']=ddgksf2021;obj['subscriber']['subscriptions']['com.ziheng.totowallet.yearly']=ddgksf2013;}
else if(ua.indexOf('Aphrodite') != -1) {obj['subscriber']['entitlements']['all']=ddgksf2021;}
else if(ua.indexOf('apollo') != -1) {obj['subscriber']['entitlements']['all']=ddgksf2021;}
else if(ua.indexOf('widget_art') != -1) {obj['subscriber']['entitlements']['all']=ddgksf2021;	}
else if(ua.indexOf('OneBox') != -1) {obj['subscriber']['entitlements']['all']=ddgksf2021;}
else if(ua.indexOf('Spark') != -1) {obj['subscriber']['entitlements']['premium']=ddgksf2021;	}
else if(ua.indexOf('Pillow') != -1) {obj['subscriber']['entitlements']['premium']=ddgksf2021;}
else if(ua.indexOf('1Blocker') != -1) {obj['subscriber']['entitlements']['premium']=ddgksf2021;}
else if(ua.indexOf('VSCO') != -1) {obj['subscriber']['entitlements']['membership']=ddgksf2021;}
else if(ua.indexOf('UTC') != -1) {obj['subscriber']['entitlements']['Entitlement.Pro']=ddgksf2021;	}
else if(ua.indexOf('%E8%AC%8E%E5%BA%95%E9%BB%91%E8%86%A0') != -1) {obj['subscriber']['entitlements']['Entitlement.Pro']=ddgksf2021;	}
else if(ua.indexOf('%E8%AC%8E%E5%BA%95%E6%99%82%E9%90%98') != -1) {obj['subscriber']['entitlements']['Entitlement.Pro']=ddgksf2021;}
else if(ua.indexOf('OffScreen') != -1) {obj['subscriber']['entitlements']['Entitlement.Pro']=ddgksf2021;	}
else if(ua.indexOf('ScannerPro') != -1) {obj['subscriber']['entitlements']['plus']=ddgksf2021;}
else if(ua.indexOf('WhiteCloud') != -1) {obj['subscriber']['entitlements']['allaccess']=ddgksf2021;}
else if(ua.indexOf('HTTPBot') != -1) {obj['subscriber']['entitlements']['pro']=ddgksf2021;}
else if(ua.indexOf('audiomack') != -1) {obj['subscriber']['entitlements']['Premium1']=ddgksf2021;}
else if(ua.indexOf('server_bee') != -1) {obj['subscriber']['entitlements']['Pro']=ddgksf2021;}
else if(ua.indexOf('simple-') != -1) {obj['subscriber']['entitlements']['patron']=ddgksf2021;}
else if(ua.indexOf('streaks') != -1) {obj['subscriber']['entitlements']['patron']=ddgksf2021;}
else if(ua.indexOf('andyworks-calculator') != -1) {obj['subscriber']['entitlements']['patron']=ddgksf2021;}
else if(ua.indexOf('vibes') != -1) {obj['subscriber']['entitlements']['patron']=ddgksf2021;}
else if(ua.indexOf('CountDuck') != -1) {ddgksf2021['product_identifier']="Lifetime";obj['subscriber']['entitlements']['premium']=ddgksf2021;obj['subscriber']['subscriptions']['Lifetime']=ddgksf2013;}
else if(ua.indexOf('IPTVUltra') != -1) {obj['subscriber']['entitlements']['premium']=ddgksf2021;}
else if(ua.indexOf('Happy%3ADays') != -1) {ddgksf2021['product_identifier']="happy_999_lifetime";obj['subscriber']['entitlements']['pro']=ddgksf2021;obj['subscriber']['subscriptions']['happy_999_lifetime']=ddgksf2013;}
else if(ua.indexOf('ChatGPTApp') != -1) {obj['subscriber']['entitlements']['Advanced']=ddgksf2021;}
else if(ua.indexOf('APTV') != -1) {obj['subscriber']['entitlements']['pro']=ddgksf2021;	}
else if(ua.indexOf('TouchRetouchBasic') != -1) {obj['subscriber']['entitlements']['premium']=ddgksf2021;	}
else if(ua.indexOf('My%20Jump%20Lab') != -1) {obj['subscriber']['entitlements']['lifetime']=ddgksf2021;	}
else if(ua.indexOf('%E7%9B%AE%E6%A0%87%E5%9C%B0%E5%9B%BE') != -1) {obj['subscriber']['entitlements']['pro']=ddgksf2021;}
else if(ua.indexOf('Paku') != -1) {obj['subscriber']['entitlements']['pro']=ddgksf2021;}
else if(ua.indexOf('Awesome%20Habits') != -1) {obj['subscriber']['entitlements']['premium']=ddgksf2021;}
else if(ua.indexOf('Gear') != -1) {ddgksf2021['product_identifier']="com.gear.app.yearly";obj['subscriber']['entitlements']['pro']=ddgksf2021;obj['subscriber']['subscriptions']['com.gear.app.yearly']=ddgksf2013;}
else if(ua.indexOf('MoneyThings') != -1) {obj['subscriber']['entitlements']['Premium']=ddgksf2021;}
else if(ua.indexOf('Anybox') != -1) {obj['subscriber']['entitlements']['pro']=ddgksf2021;	}
else if(ua.indexOf('Fileball') != -1) {obj['subscriber']['entitlements']['filebox_pro']=ddgksf2021;}
else if(ua.indexOf('Noto') != -1) {obj['subscriber']['entitlements']['pro']=ddgksf2021;}
else if(ua.indexOf('Grow') != -1) {ddgksf2021['product_identifier']="grow_lifetime";obj['subscriber']['entitlements']['grow.pro']=ddgksf2021;obj['subscriber']['subscriptions']['grow_lifetime']=ddgksf2013;}
else if(ua.indexOf('WidgetSmith') != -1) {obj['subscriber']['entitlements']['Premium']=ddgksf2021;}
else if(ua.indexOf('Percento') != -1) {obj['subscriber']['entitlements']['premium']=ddgksf2021;	}
else if(ua.indexOf('Planny') != -1) {obj['subscriber']['entitlements']['premium']=ddgksf2021;}
else if(ua.indexOf('CPUMonitor') != -1) {obj['subscriber']['entitlements']['Pro']=ddgksf2021;	}
else if(ua.indexOf('Locket') != -1) {obj['subscriber']['entitlements']['Gold']=ddgksf2021;	}
else if(ua.indexOf('My%20Tim') != -1) {obj['subscriber']['entitlements']['Pro']=ddgksf2021;	}
else if(ua.indexOf('Photom') != -1) {ddgksf2021['product_identifier']="pixelmator_photo_pro_subscription_v1_pro_offer";obj['subscriber']['entitlements']['premium']=ddgksf2021;obj['subscriber']['subscriptions']['pixelmator_photo_pro_subscription_v1_pro_offer']=ddgksf2013;	}
else if(ua.indexOf('mizframa') != -1) {ddgksf2021['product_identifier']="mf_20_lifetime2";obj['subscriber']['entitlements']['premium']=ddgksf2021;obj['subscriber']['subscriptions']['mf_20_lifetime2']=ddgksf2013;}
else if(ua.indexOf('ImageX') != -1) {ddgksf2021['product_identifier']="imagex.pro.ios.lifetime";obj['subscriber']['entitlements']['imagex.pro.ios']=ddgksf2021;obj['subscriber']['subscriptions']['imagex.pro.ios.lifetime']=ddgksf2013;	}
else if(ua.indexOf('Fin') != -1) {ddgksf2021['product_identifier']="com.circles.fin.premium.yearly";obj['subscriber']['entitlements']['premium']=ddgksf2021;obj['subscriber']['subscriptions']['com.circles.fin.premium.yearly']=ddgksf2013;}
else if(ua.indexOf('Ledger') != -1) {ddgksf2021['product_identifier']="com.lifetime.pro";obj['subscriber']['entitlements']['Pro']=ddgksf2021;obj['subscriber']['subscriptions']['com.lifetime.pro']=ddgksf2013;}
else if(ua.indexOf('One4Wall') != -1) {ddgksf2021['product_identifier']="lifetime_key";obj['subscriber']['entitlements']['lifetime']=ddgksf2021;obj['subscriber']['subscriptions']['lifetime_key']=ddgksf2013;}
else if(ua.indexOf('OneWidget') != -1) {obj['subscriber']['entitlements']['allaccess']=ddgksf2021;}
else if(ua.indexOf('CardPhoto') != -1) {obj['subscriber']['entitlements']['premium']=ddgksf2021;}
else if(ua.indexOf('PDF%20Viewer') != -1) {obj['subscriber']['entitlements']['sub.pro']=ddgksf2021;}
else if(ua.indexOf('PhotoRoom') != -1) {obj['subscriber']['entitlements']['business']=ddgksf2021;}
else if(ua.indexOf('Decision') != -1) {obj['subscriber']['entitlements']['com.nixwang.decision.entitlements.pro']=ddgksf2021;}
else if(ua.indexOf('Tangerine') != -1) {obj['subscriber']['entitlements']['Premium']=ddgksf2021;}
else if(ua.indexOf('PastePal') != -1) {obj['subscriber']['entitlements']['premium']=ddgksf2021;}
else if(ua.indexOf('Airmail') != -1) {obj['subscriber']['entitlements']['Airmail Premium']=ddgksf2021;}
else if(ua.indexOf('Stress') != -1) {obj['subscriber']['entitlements']['StressWatch Pro']=ddgksf2021;}
else{
  obj['subscriber']['entitlements']['pro']=ddgksf2021;
}
$done({body: JSON.stringify(obj)});
