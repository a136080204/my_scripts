/*
年货节
开始时间：2022.12.29 20:00-2023.1.15 23.59
变量：CODE1212
export CODE1212="xxxxxxx"
cron "0 0,12,20 29-31,1-15 12,1 *" jd_nhj.js
*/

const $ = new Env('年货节');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';












var _0xodR='jsjiami.com.v6',_0xodR_=['_0xodR'],_0x17f9=[_0xodR,'\x43\x72\x79\x70\x74\x6f\x4a\x53','\x63\x72\x79\x70\x74\x6f\x2d\x6a\x73','\x6a\x73\x64\x6f\x6d','\x69\x73\x4e\x6f\x64\x65','\x6b\x65\x79\x73','\x66\x6f\x72\x45\x61\x63\x68','\x70\x75\x73\x68','\x65\x6e\x76','\x4a\x44\x5f\x44\x45\x42\x55\x47','\x66\x61\x6c\x73\x65','\x6c\x6f\x67','\x67\x65\x74\x64\x61\x74\x61','\x43\x6f\x6f\x6b\x69\x65\x4a\x44','\x43\x6f\x6f\x6b\x69\x65\x4a\x44\x32','\x43\x6f\x6f\x6b\x69\x65\x73\x4a\x44','\x6d\x61\x70','\x63\x6f\x6f\x6b\x69\x65','\x66\x69\x6c\x74\x65\x72','\x43\x4f\x44\x45\x31\x32\x31\x32','\x43\x4f\x44\x45\x31\x32\x31\x32\x5f\x50\x49\x4e','\x43\x4f\x44\x45\x31\x32\x31\x32\x5f\x52\x45\x44\x54\x49\x4d\x45\x53','\x73\x70\x6c\x69\x74','\x74\x69\x6d\x65','\x79\x79\x79\x79\x2d\x4d\x4d\x2d\x64\x64\x20\x48\x48\x3a\x6d\x6d\x3a\x73\x73','\x75\x69\x55\x70\x64\x61\x74\x65\x54\x69\x6d\x65','\x65\x6e\x64\x46\x6c\x61\x67','\x72\x75\x6e\x45\x6e\x64','\x67\x65\x74\x48\x35\x73\x74\x5f\x57\x51\x5f\x41\x72\x72','\x72\x75\x6e\x41\x72\x72','\x32\x30\x32\x33\x2f\x31\x2f\x31\x36\x20\x30\x30\x3a\x30\x30\x3a\x30\x30\x2b\x30\x38\x3a\x30\x30','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x55\x56\x43\x6f\x6f\x6b\x69\x65\x41\x72\x72','\x55\x56\x43\x6f\x6f\x6b\x69\x65','\x79\x79\x79\x79\x2d\x4d\x4d\x2d\x64\x64','\x74\x65\x73\x74','\x70\x6f\x70','\x73\x68\x69\x66\x74','\x6c\x65\x6e\x67\x74\x68','\x6d\x73\x67','\x6e\x61\x6d\x65','\u3010\u63d0\u793a\u3011\u8bf7\u5148\u83b7\u53d6\x63\x6f\x6f\x6b\x69\x65\x0a\u76f4\u63a5\u4f7f\u7528\x4e\x6f\x62\x79\x44\x61\u7684\u4eac\u4e1c\u7b7e\u5230\u83b7\u53d6','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f','\x6a\x64\x5f\x32\x32\x31\x32\x31\x32\x5f\x52\x65\x64\x5f\x63\x6f\x64\x65','\x3d\x3d\x3d\x65\x6e\x63\x72\x79\x70\x74\x69\x6f\x6e\x3d\x3d\x3d','\x73\x65\x74\x64\x61\x74\x61','\u6d3b\u52a8\u5df2\u7ed3\u675f','\u8bf7\u5220\u9664\u6b64\u811a\u672c','\x4a\x44\x5f\x32\x32\x31\x32\x31\x32\x5f\x52\x65\x64\x73','\x4a\x44\x5f\x32\x32\x31\x32\x31\x32\x5f\x52\x65\x64','\x4a\x44\x5f\x32\x32\x31\x32\x31\x32\x5f\x52\x65\x64\x5f\x70\x69\x6e','\x6d\x64\x37\x63\x71\x35\x57','\x6d\x4d\x37\x6a\x6d\x39\x55','\x6d\x43\x37\x52\x42\x30\x7a','\x6d\x43\x37\x55\x46\x67\x65','\x6d\x4d\x37\x55\x6d\x48\x4f','\x6d\x4d\x37\x6b\x66\x7a\x36','\x6d\x4c\x37\x78\x62\x6a\x58','\x6d\x4b\x37\x66\x4c\x4c\x4b','\x6d\x4c\x37\x37\x61\x35\x47','\x6d\x74\x37\x58\x76\x79\x6c','\x73\x68\x61\x72\x65\x43\x6f\x64\x65\x41\x72\x72','\x73\x68\x61\x72\x65\x43\x6f\x64\x65\x50\x69\x6e\x41\x72\x72','\x73\x68\x61\x72\x65\x43\x6f\x64\x65','\x61\x67\x61\x69\x6e','\x55\x73\x65\x72\x4e\x61\x6d\x65','\x6d\x61\x74\x63\x68','\x69\x6e\x64\x65\x78','\x0a\x0a\x2a\x2a\x2a\x2a\x2a\x2a\u5f00\u59cb\u3010\u4eac\u4e1c\u8d26\u53f7','\x6e\x69\x63\x6b\x4e\x61\x6d\x65','\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x0a','\x69\x6e\x63\x6c\x75\x64\x65\x73','\x61\x70\x70\x5f\x6f\x70\x65\x6e','\x77\x61\x69\x74','\x72\x61\x6e\x64\x6f\x6d','\x67\x65\x74\x48\x6f\x75\x72\x73','\u4f11\u606f\u4e00\u4f1a\x2e\x2e\x2e','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x63\x6c\x6f\x73\x65','\x64\x6f\x6e\x65','\x73\x68\x61\x72\x65\x46\x6c\x61\x67','\x66\x6c\x61\x67','\x75\x72\x6c\x31','\u83b7\u53d6\x75\x72\x6c\x31\u5931\u8d25','\x75\x72\x6c\x32','\x67\x65\x74\x55\x56\x43\x6f\x6f\x6b\x69\x65','\x26\x64\x3d','\u8fd4\u5229\x75\x72\x6c\uff1a\x68\x74\x74\x70\x73\x3a\x2f\x2f\x75\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f','\x20\u53ef\u80fd\u4e0d\u662f\u7ea2\u5305\u9875\u9762','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x70\x72\x6f\x64\x65\x76\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x6d\x61\x6c\x6c\x2f\x61\x63\x74\x69\x76\x65\x2f\x32\x51\x50\x67\x63\x62\x6e\x72\x52\x7a\x53\x61\x73\x32\x41\x46\x76\x4e\x78\x46\x72\x63\x58\x62\x37\x33\x7a\x69\x2f\x69\x6e\x64\x65\x78\x2e\x68\x74\x6d\x6c\x3f\x75\x6e\x69\x6f\x6e\x41\x63\x74\x49\x64\x3d\x33\x31\x31\x35\x35\x26\x64\x3d','\x26\x63\x75\x3d\x74\x72\x75\x65\x26\x75\x74\x6d\x5f\x73\x6f\x75\x72\x63\x65\x3d\x6b\x6f\x6e\x67\x26\x75\x74\x6d\x5f\x6d\x65\x64\x69\x75\x6d\x3d\x6a\x69\x6e\x67\x66\x65\x6e','\x61\x63\x74\x49\x64','\x32\x51\x50\x67\x63\x62\x6e\x72\x52\x7a\x53\x61\x73\x32\x41\x46\x76\x4e\x78\x46\x72\x63\x58\x62\x37\x33\x7a\x69','\x65\x69\x64','\x67\x65\x74\x4f\x77\x6e\x50\x72\x6f\x70\x65\x72\x74\x79\x4e\x61\x6d\x65\x73','\x63\x6f\x75\x6e\x74','\x73\x68\x61\x72\x65\x43\x6f\x75\x6e\x74','\x67\x65\x74\x6c\x6a','\x63\x6f\x64\x65','\u3010\u4eac\u4e1c\u8d26\u53f7','\x0a\u83b7\u53d6\u65b0\u7684\u52a9\u529b\u4fe1\u606f','\x75\x70\x64\x61\x74\x65\x54\x69\x6d\x65','\x69\x6e\x64\x65\x78\x4f\x66','\x66\x6c\x6f\x6f\x72','\x33\x31\x31\x35\x35','\x61\x70\x70\x6c\x65','\x38\x2e\x33\x2e\x36','\x67\x65\x74\x43\x6f\x75\x70\x6f\x6e\x73','\x36\x61\x39\x38\x64','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x3f\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x67\x65\x74\x43\x6f\x75\x70\x6f\x6e\x73\x26\x61\x70\x70\x69\x64\x3d\x75\x26\x5f\x3d','\x26\x6c\x6f\x67\x69\x6e\x54\x79\x70\x65\x3d\x32\x26\x62\x6f\x64\x79\x3d','\x74\x6f\x53\x74\x72','\x26\x63\x6c\x69\x65\x6e\x74\x3d\x61\x70\x70\x6c\x65\x26\x63\x6c\x69\x65\x6e\x74\x56\x65\x72\x73\x69\x6f\x6e\x3d\x38\x2e\x33\x2e\x36\x26\x68\x35\x73\x74\x3d','\x2a\x2f\x2a','\x7a\x68\x2d\x63\x6e','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x70\x72\x6f\x64\x65\x76\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x70\x72\x6f\x64\x65\x76\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x6d\x61\x6c\x6c\x2f\x61\x63\x74\x69\x76\x65\x2f\x32\x51\x50\x67\x63\x62\x6e\x72\x52\x7a\x53\x61\x73\x32\x41\x46\x76\x4e\x78\x46\x72\x63\x58\x62\x37\x33\x7a\x69\x2f\x69\x6e\x64\x65\x78\x2e\x68\x74\x6d\x6c','\x68\x65\x61\x64\x65\x72\x73','\x52\x65\x66\x65\x72\x65\x72','\x67\x65\x74','\x20\x41\x50\x49\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u8def\u91cd\u8bd5','\x74\x6f\x4f\x62\x6a','\x6f\x62\x6a\x65\x63\x74','\u4e0d\u5c55\u793a\u5f39\u5c42','\u9886\u53d6\u4e0a\u9650','\u6d3b\u52a8\u672a\u5f00\u59cb','\x64\x61\x74\x61','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x6a\x6f\x69\x6e\x4e\x75\x6d','\x6a\x6f\x69\x6e\x53\x75\x66\x66\x69\x78','\x63\x6f\x75\x70\x6f\x6e\x4c\x69\x73\x74','\x74\x79\x70\x65','\u83b7\u5f97\x5b\u7ea2\u5305\x5d\ud83e\udde7','\x64\x69\x73\x63\x6f\x75\x6e\x74','\u5143\x20\u4f7f\u7528\u65f6\u95f4\x3a','\x62\x65\x67\x69\x6e\x54\x69\x6d\x65','\x65\x6e\x64\x54\x69\x6d\x65','\u83b7\u5f97\x5b\u4f18\u60e0\u5238\x5d\ud83c\udf9f\ufe0f\u6ee1','\x71\x75\x6f\x74\x61','\x20\u4f7f\u7528\u65f6\u95f4\x3a','\u83b7\u5f97\x5b\u6253\u6298\u5238\x5d\x5d\ud83c\udfab\u6ee1','\u6298\x20\u4f7f\u7528\u65f6\u95f4\x3a','\u83b7\u5f97\x5b\u672a\u77e5\x5d\ud83c\udf89','\x67\x72\x6f\x75\x70\x44\x61\x74\x61','\x67\x72\x6f\x75\x70\x49\x6e\x66\x6f','\x73\x74\x61\x74\x75\x73','\u52a9\u529b\u6ee1\u53ef\u4ee5\u9886\u53d6','\x69\x6e\x66\x6f','\u5143\u7ea2\u5305\ud83e\udde7','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x3f\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x73\x68\x6f\x77\x43\x6f\x75\x70\x6f\x6e\x26\x61\x70\x70\x69\x64\x3d\x75\x26\x5f\x3d','\x6e\x6f\x77','\x26\x6c\x6f\x67\x69\x6e\x54\x79\x70\x65\x3d\x32\x26\x62\x6f\x64\x79\x3d\x7b\x25\x32\x32\x61\x63\x74\x49\x64\x25\x32\x32\x3a\x25\x32\x32','\x25\x32\x32\x2c\x25\x32\x32\x75\x6e\x69\x6f\x6e\x41\x63\x74\x49\x64\x25\x32\x32\x3a\x25\x32\x32\x33\x31\x31\x35\x35\x25\x32\x32\x2c\x25\x32\x32\x75\x6e\x70\x6c\x25\x32\x32\x3a\x25\x32\x32','\x75\x6e\x70\x6c','\x25\x32\x32\x2c\x25\x32\x32\x70\x6c\x61\x74\x66\x6f\x72\x6d\x25\x32\x32\x3a\x34\x2c\x25\x32\x32\x75\x6e\x69\x6f\x6e\x53\x68\x61\x72\x65\x49\x64\x25\x32\x32\x3a\x25\x32\x32\x25\x32\x32\x2c','\x25\x32\x32\x75\x69\x55\x70\x64\x61\x74\x65\x54\x69\x6d\x65\x25\x32\x32\x3a','\x25\x32\x32\x64\x25\x32\x32\x3a\x25\x32\x32','\x25\x32\x32\x2c\x25\x32\x32\x65\x69\x64\x25\x32\x32\x3a\x25\x32\x32','\x25\x32\x32\x7d\x26\x63\x6c\x69\x65\x6e\x74\x3d\x69\x50\x68\x6f\x6e\x65\x26\x63\x6c\x69\x65\x6e\x74\x56\x65\x72\x73\x69\x6f\x6e\x3d\x26\x6f\x73\x56\x65\x72\x73\x69\x6f\x6e\x3d\x69\x4f\x53\x26\x73\x63\x72\x65\x65\x6e\x3d\x34\x31\x34\x2a\x38\x39\x36\x26\x64\x5f\x62\x72\x61\x6e\x64\x3d\x69\x50\x68\x6f\x6e\x65\x26\x64\x5f\x6d\x6f\x64\x65\x6c\x3d\x69\x50\x68\x6f\x6e\x65\x26\x6c\x61\x6e\x67\x3d\x7a\x68\x2d\x63\x6e\x26\x73\x64\x6b\x56\x65\x72\x73\x69\x6f\x6e\x3d\x26\x6f\x70\x65\x6e\x75\x64\x69\x64\x3d','\x6e\x75\x6d','\u3010\u8d26\u53f7','\u3011\u7f13\u5b58\u5206\u4eab\u7801\x3a','\x72\x65\x70\x6c\x61\x63\x65','\x2a\x2a\x2a\x24\x31','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x3f\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x73\x68\x61\x72\x65\x55\x6e\x69\x6f\x6e\x43\x6f\x75\x70\x6f\x6e\x26\x61\x70\x70\x69\x64\x3d\x75\x26\x5f\x3d','\x26\x6c\x6f\x67\x69\x6e\x54\x79\x70\x65\x3d\x32\x26\x62\x6f\x64\x79\x3d\x7b\x25\x32\x32\x75\x6e\x69\x6f\x6e\x41\x63\x74\x49\x64\x25\x32\x32\x3a\x25\x32\x32\x33\x31\x31\x35\x35\x25\x32\x32\x2c\x25\x32\x32\x61\x63\x74\x49\x64\x25\x32\x32\x3a\x25\x32\x32','\x25\x32\x32\x2c\x25\x32\x32\x70\x6c\x61\x74\x66\x6f\x72\x6d\x25\x32\x32\x3a\x34\x2c\x25\x32\x32\x75\x6e\x69\x6f\x6e\x53\x68\x61\x72\x65\x49\x64\x25\x32\x32\x3a\x25\x32\x32\x25\x32\x32\x2c\x25\x32\x32\x64\x25\x32\x32\x3a\x25\x32\x32','\x25\x32\x32\x2c\x25\x32\x32\x73\x75\x70\x70\x6f\x72\x74\x50\x69\x63\x25\x32\x32\x3a\x32\x2c\x25\x32\x32\x73\x75\x70\x70\x6f\x72\x74\x4c\x75\x63\x6b\x79\x43\x6f\x64\x65\x25\x32\x32\x3a\x30\x2c\x25\x32\x32\x65\x69\x64\x25\x32\x32\x3a\x25\x32\x32','\x73\x68\x61\x72\x65\x55\x72\x6c','\u3011\u5206\u4eab\u7801\uff1a','\x6c\x6f\x63\x61\x74\x69\x6f\x6e','\x4c\x6f\x63\x61\x74\x69\x6f\x6e','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x75\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f','\x3f\x73\x3d','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x67\x69\x61\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x66\x63\x66\x2e\x68\x74\x6d\x6c\x3f\x61\x3d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x70\x6f\x73\x74','\x2a\x5f\x2a','\x70\x61\x72\x73\x65','\u4eac\u4e1c\x61\x70\x69\u8fd4\u56de\u6570\u636e\u4e3a\u7a7a\uff0c\u8bf7\u68c0\u67e5\u81ea\u8eab\u539f\u56e0','\x73\x65\x74\x2d\x63\x6f\x6f\x6b\x69\x65','\x53\x65\x74\x2d\x43\x6f\x6f\x6b\x69\x65','\x74\x72\x69\x6d','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x69\x50\x68\x6f\x6e\x65\x20\x4f\x53\x20\x31\x33\x5f\x32\x5f\x33\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x31\x33\x2e\x30\x2e\x33\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x35\x45\x31\x34\x38\x20\x53\x61\x66\x61\x72\x69\x2f\x36\x30\x34\x2e\x31','\x53\x48\x41\x31','\x72\x65\x64\x73','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x6a\x64\x61\x70\x70\x3b\x69\x50\x68\x6f\x6e\x65\x3b\x31\x30\x2e\x34\x2e\x36\x3b\x31\x34\x2e\x33\x3b','\x3b\x4d\x2f\x35\x2e\x30\x3b\x6e\x65\x74\x77\x6f\x72\x6b\x2f\x77\x69\x66\x69\x3b\x41\x44\x49\x44\x2f\x3b\x6d\x6f\x64\x65\x6c\x2f\x69\x50\x68\x6f\x6e\x65\x31\x32\x2c\x31\x3b\x61\x64\x64\x72\x65\x73\x73\x69\x64\x2f\x3b\x61\x70\x70\x42\x75\x69\x6c\x64\x2f\x31\x36\x37\x38\x31\x34\x3b\x6a\x64\x53\x75\x70\x70\x6f\x72\x74\x44\x61\x72\x6b\x4d\x6f\x64\x65\x2f\x30\x3b\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x69\x50\x68\x6f\x6e\x65\x20\x4f\x53\x20\x31\x34\x5f\x33\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x35\x45\x31\x34\x38\x3b\x73\x75\x70\x70\x6f\x72\x74\x4a\x44\x53\x48\x57\x4b\x2f\x31','\x73\x74\x72\x69\x6e\x67','\u8bf7\u52ff\u968f\u610f\u5728\x42\x6f\x78\x4a\x73\u8f93\u5165\u6846\u4fee\u6539\u5185\u5bb9\x0a\u5efa\u8bae\u901a\u8fc7\u811a\u672c\u53bb\u83b7\u53d6\x63\x6f\x6f\x6b\x69\x65','\x6a\x64\x61\x70\x70\x3b\x69\x50\x68\x6f\x6e\x65\x3b\x31\x30\x2e\x31\x2e\x34\x3b\x31\x34\x2e\x33\x3b\x3b\x4d\x2f\x35\x2e\x30\x3b\x6e\x65\x74\x77\x6f\x72\x6b\x2f\x77\x69\x66\x69\x3b\x41\x44\x49\x44\x2f\x3b\x6d\x6f\x64\x65\x6c\x2f\x69\x50\x68\x6f\x6e\x65\x31\x32\x2c\x31\x3b\x61\x64\x64\x72\x65\x73\x73\x69\x64\x2f\x3b\x61\x70\x70\x42\x75\x69\x6c\x64\x2f\x31\x36\x37\x38\x31\x34\x3b\x6a\x64\x53\x75\x70\x70\x6f\x72\x74\x44\x61\x72\x6b\x4d\x6f\x64\x65\x2f\x30\x3b\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x69\x50\x68\x6f\x6e\x65\x20\x4f\x53\x20\x31\x34\x5f\x33\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x35\x45\x31\x34\x38\x3b\x73\x75\x70\x70\x6f\x72\x74\x4a\x44\x53\x48\x57\x4b\x2f\x31','\x64\x61\x6e\x67\x65\x72\x6f\x75\x73\x6c\x79','\x52\x65\x73\x6f\x75\x72\x63\x65\x4c\x6f\x61\x64\x65\x72','\x56\x69\x72\x74\x75\x61\x6c\x43\x6f\x6e\x73\x6f\x6c\x65','\x3c\x62\x6f\x64\x79\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x73\x63\x72\x69\x70\x74\x20\x73\x72\x63\x3d\x22\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x74\x61\x74\x69\x63\x2e\x33\x36\x30\x62\x75\x79\x69\x6d\x67\x2e\x63\x6f\x6d\x2f\x73\x69\x74\x65\x70\x70\x53\x74\x61\x74\x69\x63\x2f\x73\x63\x72\x69\x70\x74\x2f\x6d\x65\x73\x63\x72\x6f\x6c\x6c\x2f\x6d\x61\x70\x2e\x6a\x73\x22\x3e\x3c\x2f\x73\x63\x72\x69\x70\x74\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x73\x63\x72\x69\x70\x74\x20\x73\x72\x63\x3d\x22\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x74\x6f\x72\x61\x67\x65\x2e\x33\x36\x30\x62\x75\x79\x69\x6d\x67\x2e\x63\x6f\x6d\x2f\x77\x65\x62\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72\x2f\x6a\x73\x5f\x73\x65\x63\x75\x72\x69\x74\x79\x5f\x76\x33\x2e\x6a\x73\x22\x3e\x3c\x2f\x73\x63\x72\x69\x70\x74\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x73\x63\x72\x69\x70\x74\x20\x73\x72\x63\x3d\x22\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x74\x61\x74\x69\x63\x2e\x33\x36\x30\x62\x75\x79\x69\x6d\x67\x2e\x63\x6f\x6d\x2f\x73\x69\x74\x65\x70\x70\x53\x74\x61\x74\x69\x63\x2f\x73\x63\x72\x69\x70\x74\x2f\x75\x74\x69\x6c\x73\x2e\x6a\x73\x22\x3e\x3c\x2f\x73\x63\x72\x69\x70\x74\x3e\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x3c\x2f\x62\x6f\x64\x79\x3e','\x77\x69\x6e\x64\x6f\x77','\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65','\x73\x65\x74\x49\x74\x65\x6d','\x57\x51\x5f\x5f\x64\x79\x5f\x74\x6b\x5f\x73\x5f','\x57\x51\x5f\x5f\x64\x79\x5f\x61\x6c\x67\x6f\x5f\x73\x5f','\x57\x51\x5f\x71\x65\x5f','\x73\x69\x67\x6e\x57\x61\x61\x70','\x66\x75\x6e\x63\x74\x69\x6f\x6e','\x67\x65\x74\x49\x74\x65\x6d','\x6c\x74\x72','\x64\x6f\x63\x75\x6d\x65\x6e\x74','\x5f\x5f\x6a\x64\x63\x3d\x31\x32\x33\x3b','\x70\x72\x6f\x64\x65\x76\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d','\x6e\x61\x76\x69\x67\x61\x74\x6f\x72','\x68\x72\x65\x66','\x68\x72\x65\x66\x73','\x63\x6f\x6f\x6b\x69\x65\x73','\x75\x73\x65\x72\x41\x67\x65\x6e\x74','\x75\x73\x65\x72\x41\x67\x65\x6e\x74\x73','\x72\x6f\x75\x6e\x64','\x32\x30\x32\x32\x2d\x30\x39\x2d\x30\x32','\x5f\x5f\x6a\x64\x61','\x5f\x5f\x6a\x64\x62','\x5f\x5f\x6a\x64\x76','\x5f\x5f\x6a\x64\x63','\x67\x65\x74\x43\x6f\x6f\x6b\x69\x65','\x63\x6b\x4a\x64\x61','\x63\x6b\x4a\x64\x62','\x63\x6b\x4a\x64\x76','\x63\x6b\x4a\x64\x63','\x64\x69\x72\x65\x63\x74','\x6e\x6f\x6e\x65','\x73\x75\x62\x73\x74\x72','\x67\x65\x6e\x55\x75\x69\x64','\x75\x75\x69\x64','\x67\x65\x74\x50\x61\x72\x61\x6d\x65\x74\x65\x72','\x75\x74\x6d\x5f\x73\x6f\x75\x72\x63\x65','\x75\x74\x6d\x5f\x63\x61\x6d\x70\x61\x69\x67\x6e','\x75\x74\x6d\x5f\x6d\x65\x64\x69\x75\x6d','\x75\x74\x6d\x5f\x74\x65\x72\x6d','\x72\x65\x66\x55\x72\x6c','\x63\x6b\x44\x6f\x6d\x61\x69\x6e','\x73\x65\x6f','\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65','\x6f\x72\x67\x61\x6e\x69\x63','\x6e\x6f\x74\x20\x73\x65\x74','\x7a\x6f\x6c\x2e\x63\x6f\x6d\x2e\x63\x6e','\x63\x70\x63','\x72\x65\x66\x65\x72\x72\x61\x6c','\x67\x65\x74\x50\x61\x67\x65\x50\x61\x72\x61\x6d\x46\x72\x6f\x6d\x53\x64\x6b','\x76\x74\x73','\x73\x65\x71','\x67\x65\x6e\x48\x61\x73\x68','\x73\x65\x74\x43\x6f\x6f\x6b\x69\x65','\x6a\x6f\x69\x6e','\x63\x6b\x4a\x64\x61\x45\x78\x70','\x63\x6b\x4a\x64\x62\x45\x78\x70','\x73\x65\x74\x4a\x64\x76','\x6d\x62\x61\x5f\x73\x69\x64','\x6d\x62\x61\x5f\x6d\x75\x69\x64','\x72\x70\x44\x6f\x6d\x61\x69\x6e','\x75\x72\x61\x6e\x75\x73\x2e\x6a\x64\x2e\x63\x6f\x6d','\x6c\x6f\x67\x55\x72\x6c','\x2f\x6c\x6f\x67\x2f\x6d','\x6c\x6f\x67\x54\x79\x70\x65','\x30\x30\x30\x30\x30\x31','\x75\x73\x65\x54\x6d\x70\x43\x6f\x6f\x6b\x69\x65','\x5f\x5f\x74\x72\x61','\x5f\x5f\x74\x72\x62','\x5f\x5f\x74\x72\x63','\x63\x6b\x4a\x64\x75','\x5f\x5f\x74\x72\x75','\x5f\x5f\x6a\x64\x75','\x63\x6b\x57\x78\x41\x70\x70\x43\x6b','\x5f\x5f\x6a\x64\x77\x78\x61\x70\x70','\x63\x6b\x52\x65\x66\x43\x6c\x73','\x5f\x5f\x6a\x64\x5f\x72\x65\x66\x5f\x63\x6c\x73','\x63\x6b\x4a\x64\x75\x45\x78\x70','\x63\x6b\x4a\x64\x76\x45\x78\x70','\x63\x6b\x4a\x64\x76\x45\x6d\x62\x65\x64\x64\x65\x64\x45\x78\x70','\x63\x6b\x57\x78\x41\x70\x70\x43\x6b\x45\x78\x70','\x6d\x74\x53\x75\x62\x73\x69\x74\x65\x45\x78\x70','\x64\x6f\x6d\x61\x69\x6e','\x74\x69\x74\x6c\x65','\x72\x65\x66\x65\x72\x72\x65\x72','\x69\x2e\x65\x61\x73\x6f\x75\x2e\x63\x6f\x6d\x3a\x71','\x6d\x2e\x62\x61\x69\x64\x75\x2e\x63\x6f\x6d\x3a\x77\x6f\x72\x64','\x6d\x2e\x73\x6d\x2e\x63\x6e\x3a\x71','\x6d\x2e\x73\x6f\x2e\x63\x6f\x6d\x3a\x71','\x77\x61\x70\x2e\x73\x6f\x67\x6f\x75\x2e\x63\x6f\x6d\x3a\x6b\x65\x79\x77\x6f\x72\x64','\x6d\x2e\x73\x6f\x67\x6f\x75\x2e\x63\x6f\x6d\x3a\x6b\x65\x79\x77\x6f\x72\x64','\x77\x61\x70\x2e\x73\x6f\x67\x6f\x2e\x63\x6f\x6d\x3a\x6b\x65\x79\x77\x6f\x72\x64','\x6d\x2e\x73\x6f\x67\x6f\x2e\x63\x6f\x6d\x3a\x6b\x65\x79\x77\x6f\x72\x64','\x70\x61\x67\x65\x2e\x72\x6f\x62\x6f\x6f\x2e\x63\x6f\x6d\x3a\x71','\x61\x73\x6b\x2e\x63\x6f\x6d\x3a\x71','\x62\x61\x69\x64\x75\x3a\x77\x6f\x72\x64','\x62\x61\x69\x64\x75\x3a\x77\x64','\x62\x69\x6e\x67\x3a\x71','\x65\x61\x73\x6f\x75\x3a\x71','\x67\x6f\x6f\x67\x6c\x65\x3a\x71','\x72\x6f\x62\x6f\x6f\x3a\x77\x6f\x72\x64','\x72\x6f\x62\x6f\x6f\x3a\x71','\x73\x6d\x2e\x63\x6e\x3a\x71','\x73\x6f\x2e\x63\x6f\x6d\x3a\x71','\x73\x6f\x67\x6f\x75\x3a\x6b\x65\x79\x77\x6f\x72\x64','\x73\x6f\x67\x6f\x75\x3a\x71\x75\x65\x72\x79','\x73\x6f\x67\x6f\x2e\x63\x6f\x6d\x3a\x6b\x65\x79\x77\x6f\x72\x64','\x73\x6f\x67\x6f\x2e\x63\x6f\x6d\x3a\x71\x75\x65\x72\x79','\x79\x61\x68\x6f\x6f\x3a\x70','\x79\x61\x6e\x64\x65\x78\x3a\x74\x65\x78\x74','\x79\x69\x63\x68\x61\x3a\x6b\x65\x79','\x73\x65\x74\x54\x69\x6d\x65','\x3b\x65\x78\x70\x69\x72\x65\x73\x3d','\x74\x6f\x47\x4d\x54\x53\x74\x72\x69\x6e\x67','\x69\x73\x50\x72\x65\x79','\x7c\x64\x69\x72\x65\x63\x74\x7c\x2d\x7c\x6e\x6f\x6e\x65\x7c\x2d\x7c','\x69\x73\x45\x6d\x62\x65\x64\x64\x65\x64','\x28\x5e\x7c\x20\x29','\x3d\x28\x5b\x5e\x3b\x5d\x2a\x29\x28\x3b\x7c\x24\x29','\x75\x72\x6c\x44\x65\x63\x6f\x64\x65','\x28\x3f\x3a\x5e\x7c\x26\x7c\x5b\x3f\x5d\x7c\x5b\x2f\x5d\x29','\x3d\x28\x5b\x5e\x26\x5d\x2a\x29','\x65\x78\x65\x63','\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74','\x69\x73\x4a\x64\x4c\x6f\x67','\x3b\x6a\x64\x6c\x6f\x67\x3b','\x4a\x44\x4d\x41\x55\x6e\x69\x66\x79\x42\x72\x69\x64\x67\x65','\x4a\x44\x4d\x41\x47\x65\x74\x4d\x50\x61\x67\x65\x50\x61\x72\x61\x6d','\x77\x65\x62\x6b\x69\x74','\x6d\x65\x73\x73\x61\x67\x65\x48\x61\x6e\x64\x6c\x65\x72\x73','\x4a\x44\x4d\x41\x53\x65\x74\x4d\x50\x61\x67\x65\x50\x61\x72\x61\x6d','\x70\x72\x6f\x6d\x70\x74','\x67\x65\x74\x4d\x6f\x6e\x74\x68','\x67\x65\x74\x44\x61\x74\x65','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x67\x65\x74\x53\x65\x63\x6f\x6e\x64\x73','\x67\x65\x74\x4d\x69\x6c\x6c\x69\x73\x65\x63\x6f\x6e\x64\x73','\x67\x65\x74\x46\x75\x6c\x6c\x59\x65\x61\x72','\x6a\x68\x77\x4b\x73\x4b\x59\x72\x6a\x69\x7a\x6b\x42\x61\x6d\x69\x2e\x63\x6e\x6f\x5a\x52\x72\x59\x6d\x2e\x42\x47\x76\x36\x54\x75\x3d\x3d'];function _0x581a(_0x1a95fb,_0x2cadb0){_0x1a95fb=~~'0x'['concat'](_0x1a95fb['slice'](0x0));var _0x3dd269=_0x17f9[_0x1a95fb];return _0x3dd269;};(function(_0x2c7680,_0x268764){var _0x3c5e8e=0x0;for(_0x268764=_0x2c7680['shift'](_0x3c5e8e>>0x2);_0x268764&&_0x268764!==(_0x2c7680['pop'](_0x3c5e8e>>0x3)+'')['replace'](/[hwKKYrzkBnZRrYBGTu=]/g,'');_0x3c5e8e++){_0x3c5e8e=_0x3c5e8e^0x11d64a;}}(_0x17f9,_0x581a));let rebateCodes='';let rebatePin='';let redTimes=0x0;$[_0x581a('0')]=require(_0x581a('1'));const jsdom=require(_0x581a('2'));let cookiesArr=[],cookie='';if($[_0x581a('3')]()){Object[_0x581a('4')](jdCookieNode)[_0x581a('5')](_0x525a48=>{cookiesArr[_0x581a('6')](jdCookieNode[_0x525a48]);});if(process[_0x581a('7')][_0x581a('8')]&&process[_0x581a('7')][_0x581a('8')]===_0x581a('9'))console[_0x581a('a')]=()=>{};}else{cookiesArr=[$[_0x581a('b')](_0x581a('c')),$[_0x581a('b')](_0x581a('d')),...jsonParse($[_0x581a('b')](_0x581a('e'))||'\x5b\x5d')[_0x581a('f')](_0x12c12f=>_0x12c12f[_0x581a('10')])][_0x581a('11')](_0x56500a=>!!_0x56500a);}if(!rebatePin)rebatePin='';rebateCodes=$[_0x581a('3')]()?process[_0x581a('7')][_0x581a('12')]?process[_0x581a('7')][_0x581a('12')]:''+rebateCodes:$[_0x581a('b')](_0x581a('12'))?$[_0x581a('b')](_0x581a('12')):''+rebateCodes;rebatePin=$[_0x581a('3')]()?process[_0x581a('7')][_0x581a('13')]?process[_0x581a('7')][_0x581a('13')]:''+rebatePin:$[_0x581a('b')](_0x581a('13'))?$[_0x581a('b')](_0x581a('13')):''+rebatePin;redTimes=$[_0x581a('3')]()?process[_0x581a('7')][_0x581a('14')]?process[_0x581a('7')][_0x581a('14')]:''+redTimes:$[_0x581a('b')](_0x581a('14'))?$[_0x581a('b')](_0x581a('14')):''+redTimes;let iIl1lliI=rebatePin&&rebatePin[_0x581a('15')]('\x2c')||[];rebateCode=rebateCodes+'';$[_0x581a('16')](_0x581a('17'));message='';newCookie='';resMsg='';$[_0x581a('18')]='';$[_0x581a('19')]=![];$[_0x581a('1a')]=![];let liiiII={};$[_0x581a('1b')]={};$[_0x581a('1c')]={};let l1iIi11I=null;const i11lIiIi=_0x581a('1d');let IliliIil=new Date()[_0x581a('1e')]()+new Date()[_0x581a('1f')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8;let I1l1I1ii=$[_0x581a('16')]('\x48',IliliIil);$[_0x581a('20')]={};lr={};$[_0x581a('21')]='';let I1i111i='';let liil1l11='';$[_0x581a('16')](_0x581a('22'));li1IlIl1();!(async()=>{if(/https:\/\/u\.jd\.com\/.+/[_0x581a('23')](rebateCode)){if(rebateCode[_0x581a('15')]('\x2f')[_0x581a('24')]()){rebateCode=rebateCode[_0x581a('15')]('\x2f')[_0x581a('24')]()[_0x581a('15')]('\x3f')[_0x581a('25')]();}else{rebateCode='';rebateCodes='';}}if(rebateCode[_0x581a('26')]!=0x7){rebateCode='';rebateCodes='';}if(!cookiesArr[0x0]){$[_0x581a('27')]($[_0x581a('28')],_0x581a('29'),_0x581a('2a'),{'open-url':_0x581a('2a')});if(process&&process[_0x581a('7')]&&process[_0x581a('7')][_0x581a('2b')]=='\x74\x67'){console[_0x581a('a')](_0x581a('2c')),$[_0x581a('2d')](_0x581a('2c'),_0x581a('2b'));}return;}if(IliliIil>new Date(i11lIiIi)[_0x581a('1e')]()){$[_0x581a('27')]($[_0x581a('28')],_0x581a('2e'),_0x581a('2f'));$[_0x581a('2d')]('',_0x581a('30'));$[_0x581a('2d')]('',_0x581a('31'));$[_0x581a('2d')]('',_0x581a('32'));return;}const _0x5450c5=[_0x581a('33'),_0x581a('34'),_0x581a('35'),_0x581a('36'),_0x581a('37'),_0x581a('38'),_0x581a('39'),_0x581a('3a'),_0x581a('3b'),_0x581a('3c')];if(!rebateCodes)rebateCode=_0x5450c5[random(0x0,_0x5450c5[_0x581a('26')])];$[_0x581a('3d')]={};$[_0x581a('3e')]=$[_0x581a('b')](_0x581a('32'))||{};$[_0x581a('3f')]='';$[_0x581a('40')]=![];let _0x1c73b2=![];await i1lIIII1();for(let _0x5e5ebc=0x0;_0x5e5ebc<cookiesArr[_0x581a('26')]&&!$[_0x581a('1a')];_0x5e5ebc++){if($[_0x581a('19')])break;cookie=cookiesArr[_0x5e5ebc];if(cookie){$[_0x581a('41')]=decodeURIComponent(cookie[_0x581a('42')](/pt_pin=([^; ]+)(?=;?)/)&&cookie[_0x581a('42')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[_0x581a('43')]=_0x5e5ebc+0x1;if($[_0x581a('1c')][$[_0x581a('41')]])continue;console[_0x581a('a')](_0x581a('44')+$[_0x581a('43')]+'\u3011'+($[_0x581a('45')]||$[_0x581a('41')])+_0x581a('46'));if((_0x5e5ebc==0x5||_0x5e5ebc==0xb)&&rebateCodes){rebateCode=_0x5450c5[random(0x0,_0x5450c5[_0x581a('26')])];}else{if(rebateCodes){rebateCode=rebateCodes;}else{rebateCode=_0x5450c5[random(0x0,_0x5450c5[_0x581a('26')])];}}let _0x5ad5bc=0x1;if(!cookie[_0x581a('47')](_0x581a('48'))){_0x5ad5bc=0x2;}await getUA(_0x5ad5bc);await main();await $[_0x581a('49')](Math[_0x581a('4a')]()*0x1f4+0x1f4,0xa);let _0x22c026=new Date()[_0x581a('4b')]();if(_0x22c026==0x0||_0x22c026==0x1||_0x22c026==0x2||_0x22c026==0x3||_0x22c026==0x4){if($[_0x581a('43')]%0x8==0x0)console[_0x581a('a')](_0x581a('4c'));if($[_0x581a('43')]%0x8==0x0)await $[_0x581a('49')](parseInt(Math[_0x581a('4a')]()*0xdac+0xea60,0xa));}if($[_0x581a('19')])break;}$[_0x581a('2d')]($[_0x581a('3e')],_0x581a('32'));}$[_0x581a('2d')]($[_0x581a('3e')],_0x581a('32'));})()[_0x581a('4d')](_0x49194a=>$[_0x581a('4e')](_0x49194a))[_0x581a('4f')](()=>{if(l1iIi11I)l1iIi11I[_0x581a('50')]();$[_0x581a('51')]();});async function main(_0x10c7c2=0x0){try{$[_0x581a('21')]=$[_0x581a('20')][$[_0x581a('41')]]||'';if(!$[_0x581a('21')]){li1IlIl1();}resMsg='';let _0x490c5d=![];let _0x4e6780=0x0;let _0x5a21eb=0x0;let _0x27a06b=0x0;$[_0x581a('52')]=!![];do{if(_0x5a21eb>0x2)_0x4e6780=0x0;$[_0x581a('53')]=0x0;newCookie='';$[_0x581a('54')]='';await getUrl1();if(!$[_0x581a('54')]){console[_0x581a('a')](_0x581a('55'));break;}$[_0x581a('56')]='';$[_0x581a('21')]=I1i111i[_0x581a('57')]('','',$[_0x581a('54')],$[_0x581a('21')]);$[_0x581a('20')][$[_0x581a('41')]]=$[_0x581a('21')]+'';await IIiiilIi();if(!/unionActId=\d+/[_0x581a('23')]($[_0x581a('56')])&&!new RegExp(_0x581a('58')+rebateCode)[_0x581a('23')]($[_0x581a('56')])){console[_0x581a('a')](_0x581a('59')+rebateCode+_0x581a('5a'));$[_0x581a('1a')]=!![];return;}if(!$[_0x581a('56')])$[_0x581a('56')]=_0x581a('5b')+rebateCode+_0x581a('5c');$[_0x581a('5d')]=$[_0x581a('56')][_0x581a('42')](/mall\/active\/([^\/]+)\/index\.html/)&&$[_0x581a('56')][_0x581a('42')](/mall\/active\/([^\/]+)\/index\.html/)[0x1]||_0x581a('5e');$[_0x581a('21')]=I1i111i[_0x581a('57')]('','',$[_0x581a('56')],$[_0x581a('21')]);$[_0x581a('20')][$[_0x581a('41')]]=$[_0x581a('21')]+'';$[_0x581a('5f')]='';let _0x391c7b=getBody($['\x55\x41'],$[_0x581a('56')]);await lIIlIlll(_0x391c7b);if(!$[_0x581a('5f')]){$[_0x581a('5f')]=-0x1;}if(_0x10c7c2==0x0){let _0x271bba=0x0;let _0x51cb14=!![];let _0x224b9b=0x0;if(Object[_0x581a('60')](liiiII)[_0x581a('26')]>_0x4e6780&&$[_0x581a('52')]){for(let _0x1cae2e in liiiII||{}){if(_0x1cae2e==$[_0x581a('41')]){$[_0x581a('53')]=0x1;continue;}if(_0x271bba==_0x4e6780){$[_0x581a('53')]=0x0;$[_0x581a('3f')]=liiiII[_0x1cae2e]||'';if($[_0x581a('3e')][_0x1cae2e]&&$[_0x581a('3e')][_0x1cae2e][_0x581a('47')]($[_0x581a('41')])){_0x224b9b++;continue;}if($[_0x581a('3f')][_0x581a('61')]>=$[_0x581a('3d')][_0x581a('62')]){_0x224b9b++;continue;}$[_0x581a('63')]=![];let _0x248c0e=await getCoupons($[_0x581a('3f')][_0x581a('64')],0x1);if(/重复助力/[_0x581a('23')](_0x248c0e)){if(!$[_0x581a('3e')][_0x1cae2e])$[_0x581a('3e')][_0x1cae2e]=[];$[_0x581a('3e')][_0x1cae2e][_0x581a('6')]($[_0x581a('41')]);_0x4e6780--;_0x27a06b--;}else if(/助力/[_0x581a('23')](_0x248c0e)&&/上限/[_0x581a('23')](_0x248c0e)){$[_0x581a('52')]=![];}else if(!/领取上限/[_0x581a('23')](_0x248c0e)&&$[_0x581a('63')]==!![]){if(!$[_0x581a('3e')][_0x1cae2e])$[_0x581a('3e')][_0x1cae2e]=[];if(!$[_0x581a('3e')][_0x1cae2e][_0x581a('47')]($[_0x581a('41')])){$[_0x581a('3e')][_0x1cae2e][_0x581a('6')]($[_0x581a('41')]);}_0x4e6780--;}else{_0x51cb14=![];}}_0x271bba++;}}if(_0x51cb14&&_0x224b9b==Object[_0x581a('60')](liiiII)[_0x581a('26')]){_0x490c5d=!![];}if(_0x271bba==0x0){$[_0x581a('63')]=![];let _0x5bf7bd=await getCoupons('',0x1);if(!/领取上限/[_0x581a('23')](_0x5bf7bd)&&$[_0x581a('63')]==!![]){_0x4e6780--;}}if($[_0x581a('19')])break;}else{let _0x1d3906=await showCoupon();if(!$[_0x581a('19')]&&_0x1d3906&&$[_0x581a('40')]==![])await shareUnionCoupon();if($[_0x581a('40')]==![])break;}if($[_0x581a('40')]==!![]&&_0x5a21eb<0x1){_0x5a21eb++;$[_0x581a('40')]=![];}_0x4e6780++;_0x27a06b++;if($[_0x581a('53')]==0x1){await $[_0x581a('49')](parseInt(Math[_0x581a('4a')]()*0x258+0xc8,0xa));}if(redTimes>0x0&&redTimes<=_0x27a06b)break;}while($[_0x581a('53')]==0x1&&_0x4e6780<0x5);if($[_0x581a('19')])return;if(resMsg){message+=_0x581a('65')+$[_0x581a('43')]+'\u3011\x0a'+resMsg;}if(_0x490c5d){console[_0x581a('a')](_0x581a('66'));await i1lIIII1(0x1);}await $[_0x581a('49')](parseInt(Math[_0x581a('4a')]()*0x258+0xc8,0xa));}catch(_0x2aced2){console[_0x581a('a')](_0x2aced2);}}async function i1lIIII1(_0x4392f4=0x0){try{let _0x5f4f73=0x2;if(_0x4392f4==0x1)_0x5f4f73=0x1;let _0x3f98e3=0x0;for(let _0x5a4718 in $[_0x581a('3d')]||{}){if(_0x5a4718===_0x581a('53')||_0x5a4718===_0x581a('67')||_0x5a4718===_0x581a('62'))continue;if($[_0x581a('3d')][_0x5a4718]&&$[_0x581a('3d')][_0x581a('62')]&&$[_0x581a('3d')][_0x5a4718][_0x581a('61')]<$[_0x581a('3d')][_0x581a('62')])_0x3f98e3++;}for(let _0x52aaf3=0x0;_0x52aaf3<cookiesArr[_0x581a('26')]&&!$[_0x581a('1a')];_0x52aaf3++){cookie=cookiesArr[_0x52aaf3];if(cookie){$[_0x581a('41')]=decodeURIComponent(cookie[_0x581a('42')](/pt_pin=([^; ]+)(?=;?)/)&&cookie[_0x581a('42')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);if(iIl1lliI[_0x581a('26')]>0x0&&iIl1lliI[_0x581a('68')]($[_0x581a('41')])==-0x1||$[_0x581a('3d')][$[_0x581a('41')]])continue;$[_0x581a('43')]=_0x52aaf3+0x1;await getUA();await main(0x1);let _0x5439ca=0x0;for(let _0x5a4718 in $[_0x581a('3d')]||{}){if(_0x5a4718===_0x581a('53')||_0x5a4718===_0x581a('67')||_0x5a4718===_0x581a('62'))continue;if($[_0x581a('3d')][_0x5a4718]&&$[_0x581a('3d')][_0x581a('62')]&&$[_0x581a('3d')][_0x5a4718][_0x581a('61')]<$[_0x581a('3d')][_0x581a('62')])_0x5439ca++;}if($[_0x581a('19')]||_0x5439ca-_0x3f98e3>=_0x5f4f73)break;}}}catch(_0x55870d){console[_0x581a('a')](_0x55870d);}if(Object[_0x581a('60')]($[_0x581a('3d')])[_0x581a('26')]>0x0){for(let _0x3487a7 in $[_0x581a('3d')]||{}){if(_0x3487a7===_0x581a('53')||_0x3487a7===_0x581a('67')||_0x3487a7===_0x581a('62'))continue;if($[_0x581a('3d')][_0x3487a7])liiiII[_0x3487a7]=$[_0x581a('3d')][_0x3487a7];}}}function random(_0x373aac,_0xa93e19){return Math[_0x581a('69')](Math[_0x581a('4a')]()*(_0xa93e19-_0x373aac))+_0x373aac;}function getCoupons(_0x7f2ece='',_0x585884=0x1){return new Promise(async _0x576905=>{$[_0x581a('21')]=I1i111i[_0x581a('57')]('','',$[_0x581a('56')],$[_0x581a('21')]);$[_0x581a('20')][$[_0x581a('41')]]=$[_0x581a('21')]+'';let _0xd3b931='';let _0x46009f=new Date()[_0x581a('1e')]()+new Date()[_0x581a('1f')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8;let _0xaa7d85=0x4;if($[_0x581a('16')]('\x48',_0x46009f)=='\x32\x31'){_0xaa7d85=0x2;}const _0x50f6e1={'platform':_0xaa7d85,'unionActId':_0x581a('6a'),'actId':$[_0x581a('5d')],'d':rebateCode,'unionShareId':_0x7f2ece,'type':_0x585884,'eid':$[_0x581a('5f')]};const _0xb8e5b8={'appid':'\x75','body':_0x50f6e1,'client':_0x581a('6b'),'clientVersion':_0x581a('6c'),'functionId':_0x581a('6d')};_0xd3b931=await hhhh(_0x581a('6e'),_0xb8e5b8);_0xd3b931=encodeURIComponent(_0xd3b931);let _0x3ec0c9='';let _0x48bab1={'url':_0x581a('6f')+_0x46009f+_0x581a('70')+encodeURIComponent($[_0x581a('71')](_0x50f6e1))+_0x581a('72')+_0xd3b931,'headers':{'accept':_0x581a('73'),'Accept-Language':_0x581a('74'),'Accept-Encoding':_0x581a('75'),'Cookie':''+$[_0x581a('21')]+newCookie+'\x20'+cookie,'origin':_0x581a('76'),'Referer':_0x581a('77'),'User-Agent':$['\x55\x41']}};if($[_0x581a('56')])_0x48bab1[_0x581a('78')][_0x581a('79')]=$[_0x581a('56')];$[_0x581a('7a')](_0x48bab1,async(_0x83ca3,_0x10a986,_0x3007f7)=>{try{if(_0x83ca3){console[_0x581a('a')](''+$[_0x581a('71')](_0x83ca3));console[_0x581a('a')]($[_0x581a('28')]+_0x581a('7b'));}else{let _0x20fe8c=$[_0x581a('7c')](_0x3007f7,_0x3007f7);if(typeof _0x20fe8c==_0x581a('7d')){if(_0x20fe8c[_0x581a('27')]){_0x3ec0c9=_0x20fe8c[_0x581a('27')];console[_0x581a('a')](_0x20fe8c[_0x581a('27')]);}if(_0x20fe8c[_0x581a('27')][_0x581a('68')](_0x581a('7e'))>-0x1&&_0x585884==0x1)$[_0x581a('40')]=!![];if(_0x20fe8c[_0x581a('27')][_0x581a('68')](_0x581a('7f'))===-0x1&&_0x20fe8c[_0x581a('27')][_0x581a('68')]('\u767b\u5f55')===-0x1){if(_0x585884==0x1)$[_0x581a('53')]=0x1;}if(_0x20fe8c[_0x581a('27')][_0x581a('68')](_0x581a('2e'))>-0x1||_0x20fe8c[_0x581a('27')][_0x581a('68')](_0x581a('80'))>-0x1){$[_0x581a('19')]=!![];return;}if(_0x7f2ece&&typeof _0x20fe8c[_0x581a('81')]!==_0x581a('82')&&typeof _0x20fe8c[_0x581a('81')][_0x581a('83')]!==_0x581a('82')){console[_0x581a('a')]('\u5f53\u524d'+_0x20fe8c[_0x581a('81')][_0x581a('84')]+'\x3a'+_0x20fe8c[_0x581a('81')][_0x581a('83')]);}if(_0x20fe8c[_0x581a('64')]==0x0&&_0x20fe8c[_0x581a('81')]){if(_0x585884==0x1)$[_0x581a('3f')][_0x581a('61')]++;let _0x586984='';if(_0x20fe8c[_0x581a('81')][_0x581a('85')][0x0][_0x581a('86')]==0x1){$[_0x581a('63')]=!![];_0x586984=_0x581a('87')+_0x20fe8c[_0x581a('81')][_0x581a('85')][0x0][_0x581a('88')]+_0x581a('89')+$[_0x581a('16')](_0x581a('22'),_0x20fe8c[_0x581a('81')][_0x581a('8a')])+'\x20'+$[_0x581a('16')](_0x581a('22'),_0x20fe8c[_0x581a('81')][_0x581a('8b')]);}else if(_0x20fe8c[_0x581a('81')][_0x581a('85')][0x0][_0x581a('86')]==0x3){$[_0x581a('63')]=!![];_0x586984=_0x581a('8c')+_0x20fe8c[_0x581a('81')][_0x581a('85')][0x0][_0x581a('8d')]+'\u51cf'+_0x20fe8c[_0x581a('81')][_0x581a('85')][0x0][_0x581a('88')]+_0x581a('8e')+$[_0x581a('16')](_0x581a('22'),_0x20fe8c[_0x581a('81')][_0x581a('8a')])+'\x20'+$[_0x581a('16')](_0x581a('22'),_0x20fe8c[_0x581a('81')][_0x581a('8b')]);}else if(_0x20fe8c[_0x581a('81')][_0x581a('85')][0x0][_0x581a('86')]==0x6){$[_0x581a('63')]=!![];_0x586984=_0x581a('8f')+_0x20fe8c[_0x581a('81')][_0x581a('85')][0x0][_0x581a('8d')]+'\u6253'+_0x20fe8c[_0x581a('81')][_0x581a('85')][0x0][_0x581a('88')]*0xa+_0x581a('90')+$[_0x581a('16')](_0x581a('22'),_0x20fe8c[_0x581a('81')][_0x581a('8a')])+'\x20'+$[_0x581a('16')](_0x581a('22'),_0x20fe8c[_0x581a('81')][_0x581a('8b')]);}else{$[_0x581a('63')]=!![];_0x586984=_0x581a('91')+(_0x20fe8c[_0x581a('81')][_0x581a('85')][0x0][_0x581a('8d')]||'')+'\x20'+_0x20fe8c[_0x581a('81')][_0x581a('85')][0x0][_0x581a('88')]+_0x581a('8e')+$[_0x581a('16')](_0x581a('22'),_0x20fe8c[_0x581a('81')][_0x581a('8a')])+'\x20'+$[_0x581a('16')](_0x581a('22'),_0x20fe8c[_0x581a('81')][_0x581a('8b')]);console[_0x581a('a')](_0x3007f7);}if(_0x586984){resMsg+=_0x586984+'\x0a';console[_0x581a('a')](_0x586984);}}if(_0x585884==0x1&&typeof _0x20fe8c[_0x581a('81')]!==_0x581a('82')&&typeof _0x20fe8c[_0x581a('81')][_0x581a('92')]!==_0x581a('82')&&typeof _0x20fe8c[_0x581a('81')][_0x581a('92')][_0x581a('93')]!==_0x581a('82')){for(let _0x152928 of _0x20fe8c[_0x581a('81')][_0x581a('92')][_0x581a('93')]||[]){if(_0x152928[_0x581a('94')]==0x2){console[_0x581a('a')](_0x581a('95')+_0x152928[_0x581a('96')]+_0x581a('97'));await $[_0x581a('49')](parseInt(Math[_0x581a('4a')]()*0x7d0+0x7d0,0xa));await getCoupons('',0x2);}}}}else{console[_0x581a('a')](_0x3007f7);}}}catch(_0x1f8c11){$[_0x581a('4e')](_0x1f8c11,_0x10a986);}finally{_0x576905(_0x3ec0c9);}});});}function showCoupon(_0x22b2a9=''){let _0x53e9ba=!![];return new Promise(_0x30820b=>{$[_0x581a('21')]=I1i111i[_0x581a('57')]('','',$[_0x581a('56')],$[_0x581a('21')]);$[_0x581a('20')][$[_0x581a('41')]]=$[_0x581a('21')]+'';let _0x2e999a={'url':_0x581a('98')+Date[_0x581a('99')]()+_0x581a('9a')+$[_0x581a('5d')]+_0x581a('9b')+$[_0x581a('9c')]+_0x581a('9d')+($[_0x581a('18')]?_0x581a('9e')+$[_0x581a('18')]+'\x2c':'')+_0x581a('9f')+rebateCode+_0x581a('a0')+$[_0x581a('5f')]+_0x581a('a1'),'headers':{'accept':_0x581a('73'),'Accept-Language':_0x581a('74'),'Accept-Encoding':_0x581a('75'),'Cookie':''+$[_0x581a('21')]+newCookie+'\x20'+cookie,'origin':_0x581a('76'),'Referer':_0x581a('77'),'User-Agent':$['\x55\x41']}};if($[_0x581a('56')])_0x2e999a[_0x581a('78')][_0x581a('79')]=$[_0x581a('56')];$[_0x581a('7a')](_0x2e999a,async(_0x13c0d8,_0x519aeb,_0x156071)=>{try{if(_0x13c0d8){console[_0x581a('a')](''+$[_0x581a('71')](_0x13c0d8));console[_0x581a('a')]($[_0x581a('28')]+_0x581a('7b'));}else{let _0x543933=$[_0x581a('7c')](_0x156071,_0x156071);if(typeof _0x543933==_0x581a('7d')){if(_0x543933[_0x581a('27')]){console[_0x581a('a')](_0x543933[_0x581a('27')]);}if(_0x543933[_0x581a('27')][_0x581a('68')](_0x581a('7e'))>-0x1)$[_0x581a('40')]=!![];if(_0x543933[_0x581a('27')][_0x581a('68')](_0x581a('7f'))>-0x1)$[_0x581a('1c')][$[_0x581a('41')]]=!![];if(_0x543933[_0x581a('27')][_0x581a('68')]('\u4e0a\u9650')===-0x1&&_0x543933[_0x581a('27')][_0x581a('68')]('\u767b\u5f55')===-0x1){$[_0x581a('53')]=0x1;}if(_0x543933[_0x581a('27')][_0x581a('68')](_0x581a('2e'))>-0x1||_0x543933[_0x581a('27')][_0x581a('68')](_0x581a('80'))>-0x1){$[_0x581a('19')]=!![];return;}if(_0x543933[_0x581a('81')][_0x581a('18')])$[_0x581a('18')]=_0x543933[_0x581a('81')][_0x581a('18')];if(typeof _0x543933[_0x581a('81')]!==_0x581a('82')&&typeof _0x543933[_0x581a('81')][_0x581a('92')]!==_0x581a('82')&&typeof _0x543933[_0x581a('81')][_0x581a('92')][_0x581a('83')]!==_0x581a('82')){$[_0x581a('83')]=_0x543933[_0x581a('81')][_0x581a('92')][_0x581a('83')];$[_0x581a('62')]=0x0;for(let _0x194f04 of _0x543933[_0x581a('81')][_0x581a('92')][_0x581a('93')]){if($[_0x581a('62')]<_0x194f04[_0x581a('a2')])$[_0x581a('62')]=_0x194f04[_0x581a('a2')];}if($[_0x581a('3d')][$[_0x581a('41')]]){$[_0x581a('3d')][$[_0x581a('41')]][_0x581a('61')]=$[_0x581a('62')];}$[_0x581a('3d')][_0x581a('62')]=$[_0x581a('62')];if($[_0x581a('62')]<=$[_0x581a('83')]){if(!$[_0x581a('3d')][$[_0x581a('41')]])$[_0x581a('3d')][$[_0x581a('41')]]={};$[_0x581a('3d')][$[_0x581a('41')]][_0x581a('61')]=$[_0x581a('83')];_0x53e9ba=![];}console[_0x581a('a')](_0x581a('a3')+$[_0x581a('43')]+'\u3011'+($[_0x581a('45')]||$[_0x581a('41')])+'\x20'+$[_0x581a('83')]+'\x2f'+$[_0x581a('62')]+'\u4eba');}if(_0x543933[_0x581a('27')][_0x581a('68')](_0x581a('2e'))>-0x1){_0x53e9ba=![];}if(typeof _0x543933[_0x581a('81')]!==_0x581a('82')&&typeof _0x543933[_0x581a('81')][_0x581a('92')]!==_0x581a('82')&&typeof _0x543933[_0x581a('81')][_0x581a('92')][_0x581a('93')]!==_0x581a('82')){for(let _0x46f6fb of _0x543933[_0x581a('81')][_0x581a('92')][_0x581a('93')]||[]){if(_0x46f6fb[_0x581a('94')]==0x2){console[_0x581a('a')](_0x581a('95')+_0x46f6fb[_0x581a('96')]+_0x581a('97'));await $[_0x581a('49')](parseInt(Math[_0x581a('4a')]()*0x7d0+0x7d0,0xa));await getCoupons('',0x2);}}}}else{console[_0x581a('a')](_0x156071);}}}catch(_0x339eda){$[_0x581a('4e')](_0x339eda,_0x519aeb);}finally{_0x30820b(_0x53e9ba);}});});}function shareUnionCoupon(){if($[_0x581a('3d')][$[_0x581a('41')]]){console[_0x581a('a')](_0x581a('a3')+$[_0x581a('43')]+_0x581a('a4')+$[_0x581a('3d')][$[_0x581a('41')]][_0x581a('64')][_0x581a('a5')](/.+(.{3})/,_0x581a('a6')));return;}return new Promise(_0x1976fc=>{let _0x341f58={'url':_0x581a('a7')+Date[_0x581a('99')]()+_0x581a('a8')+$[_0x581a('5d')]+_0x581a('a9')+rebateCode+_0x581a('aa')+$[_0x581a('5f')]+_0x581a('a1'),'headers':{'accept':_0x581a('73'),'Accept-Language':_0x581a('74'),'Accept-Encoding':_0x581a('75'),'Cookie':''+$[_0x581a('21')]+newCookie+'\x20'+cookie,'origin':_0x581a('76'),'Referer':_0x581a('77'),'User-Agent':$['\x55\x41']}};$[_0x581a('7a')](_0x341f58,async(_0x1545e1,_0x2ce8cf,_0x152768)=>{try{if(_0x1545e1){console[_0x581a('a')](''+$[_0x581a('71')](_0x1545e1));console[_0x581a('a')]($[_0x581a('28')]+_0x581a('7b'));}else{let _0x429069=$[_0x581a('7c')](_0x152768,_0x152768);if(typeof _0x429069==_0x581a('7d')){if(_0x429069[_0x581a('64')]==0x0&&_0x429069[_0x581a('81')]&&_0x429069[_0x581a('81')][_0x581a('ab')]){let _0x13cfec=_0x429069[_0x581a('81')][_0x581a('ab')][_0x581a('42')](/\?s=([^&]+)/)&&_0x429069[_0x581a('81')][_0x581a('ab')][_0x581a('42')](/\?s=([^&]+)/)[0x1]||'';if(_0x13cfec){console[_0x581a('a')](_0x581a('a3')+$[_0x581a('43')]+_0x581a('ac')+_0x13cfec[_0x581a('a5')](/.+(.{3})/,_0x581a('a6')));$[_0x581a('3d')][$[_0x581a('41')]]={'code':_0x13cfec,'count':$[_0x581a('83')]};}}}else{console[_0x581a('a')](_0x152768);}}}catch(_0x28139e){$[_0x581a('4e')](_0x28139e,_0x2ce8cf);}finally{_0x1976fc();}});});}function IIiiilIi(){return new Promise(_0x4a9695=>{const _0x387b64={'url':$[_0x581a('54')],'followRedirect':![],'headers':{'Cookie':''+$[_0x581a('21')]+newCookie+'\x20'+cookie,'User-Agent':$['\x55\x41']}};$[_0x581a('7a')](_0x387b64,async(_0x37c243,_0x1e497b,_0x3696ff)=>{try{IIiI1il(_0x1e497b);$[_0x581a('56')]=_0x1e497b&&_0x1e497b[_0x581a('78')]&&(_0x1e497b[_0x581a('78')][_0x581a('ad')]||_0x1e497b[_0x581a('78')][_0x581a('ae')]||'')||'';$[_0x581a('56')]=decodeURIComponent($[_0x581a('56')]);$[_0x581a('56')]=$[_0x581a('56')][_0x581a('42')](/(https:\/\/prodev[\.m]{0,}\.jd\.com\/mall[^'"]+)/)&&$[_0x581a('56')][_0x581a('42')](/(https:\/\/prodev[\.m]{0,}\.jd\.com\/mall[^'"]+)/)[0x1]||'';}catch(_0x37a54d){$[_0x581a('4e')](_0x37a54d,_0x1e497b);}finally{_0x4a9695(_0x3696ff);}});});}function getUrl1(){return new Promise(_0x5982a1=>{const _0x58665b={'url':_0x581a('af')+rebateCode+($[_0x581a('3f')]&&_0x581a('b0')+$[_0x581a('3f')]||''),'followRedirect':![],'headers':{'Cookie':''+$[_0x581a('21')]+newCookie+'\x20'+cookie,'User-Agent':$['\x55\x41']}};$[_0x581a('7a')](_0x58665b,async(_0x3b6ae1,_0x2e7151,_0x2a726b)=>{try{IIiI1il(_0x2e7151);$[_0x581a('54')]=_0x2a726b&&_0x2a726b[_0x581a('42')](/(https:\/\/u\.jd\.com\/jda[^']+)/)&&_0x2a726b[_0x581a('42')](/(https:\/\/u\.jd\.com\/jda[^']+)/)[0x1]||'';}catch(_0x196843){$[_0x581a('4e')](_0x196843,_0x2e7151);}finally{_0x5982a1(_0x2a726b);}});});}function lIIlIlll(_0x27007c){return new Promise(_0x2127d3=>{const _0x31067e={'url':_0x581a('b1')+_0x27007c['\x61'],'body':'\x64\x3d'+_0x27007c['\x64'],'headers':{'Content-Type':_0x581a('b2'),'User-Agent':$['\x55\x41']}};$[_0x581a('b3')](_0x31067e,async(_0x276f62,_0x421f04,_0x275e89)=>{try{if(_0x276f62){throw new Error(_0x276f62);}else{if(_0x275e89[_0x581a('68')](_0x581a('b4'))>0x0){_0x275e89=_0x275e89[_0x581a('15')](_0x581a('b4'),0x2);_0x275e89=JSON[_0x581a('b5')](_0x275e89[0x1]);$[_0x581a('5f')]=_0x275e89[_0x581a('5f')];}else{console[_0x581a('a')](_0x581a('b6'));}}}catch(_0x384664){$[_0x581a('4e')](_0x384664,_0x421f04);}finally{_0x2127d3(_0x275e89);}});});}function IIiI1il(_0x5da69d){let _0x46578c=_0x5da69d&&_0x5da69d[_0x581a('78')]&&(_0x5da69d[_0x581a('78')][_0x581a('b7')]||_0x5da69d[_0x581a('78')][_0x581a('b8')]||'')||'';let _0x49cb63='';if(_0x46578c){if(typeof _0x46578c!=_0x581a('7d')){_0x49cb63=_0x46578c[_0x581a('15')]('\x2c');}else _0x49cb63=_0x46578c;for(let _0xf056c9 of _0x49cb63){let _0x428ad1=_0xf056c9[_0x581a('15')]('\x3b')[0x0][_0x581a('b9')]();if(_0x428ad1[_0x581a('15')]('\x3d')[0x1]){if(_0x428ad1[_0x581a('15')]('\x3d')[0x0]==_0x581a('9c')&&_0x428ad1[_0x581a('15')]('\x3d')[0x1]){$[_0x581a('9c')]=_0x428ad1[_0x581a('15')]('\x3d')[0x1];}if(newCookie[_0x581a('68')](_0x428ad1[_0x581a('15')]('\x3d')[0x1])==-0x1)newCookie+=_0x428ad1[_0x581a('a5')](/ /g,'')+'\x3b\x20';}}}}function getUA(_0x1bc12f=0x1){_0x1bc12f=0x1;if(_0x1bc12f==0x2){$['\x55\x41']=_0x581a('ba');}else{let _0x315698=$[_0x581a('0')][_0x581a('bb')]($[_0x581a('41')]+_0x581a('bc'))[_0x581a('bd')]();$['\x55\x41']=_0x581a('be')+_0x315698+_0x581a('bf');}}function IIilli1i(_0x3d5f81){if(typeof _0x3d5f81==_0x581a('c0')){try{return JSON[_0x581a('b5')](_0x3d5f81);}catch(_0x273b2e){console[_0x581a('a')](_0x273b2e);$[_0x581a('27')]($[_0x581a('28')],'',_0x581a('c1'));return[];}}}async function iI1iill1(_0x4d5f76){return new Promise(_0x224590=>setTimeout(_0x224590,_0x4d5f76));}async function ii1iIi1i(){try{const {JSDOM}=jsdom;let _0x3c7eaa={'url':_0x581a('5b')+rebateCode+_0x581a('5c'),'referrer':_0x581a('af'),'userAgent':_0x581a('c2'),'runScripts':_0x581a('c3'),'resources':new jsdom[(_0x581a('c4'))]({'userAgent':_0x581a('c2'),'referrer':_0x581a('af')}),'includeNodeLocations':!![],'storageQuota':0x989680,'pretendToBeVisual':!![],'virtualConsole':new jsdom[(_0x581a('c5'))]()};const _0x3576c5=new JSDOM(_0x581a('c6'),_0x3c7eaa);await iI1iill1(0x3e8);l1iIi11I=_0x3576c5[_0x581a('c7')];}catch(_0x3e0636){console[_0x581a('a')](_0x3e0636);}}async function hhhh(_0x4d2d6d,_0x33293a){if(!$[_0x581a('1b')][$[_0x581a('41')]])$[_0x581a('1b')][$[_0x581a('41')]]={};let _0x26979e=$[_0x581a('1b')][$[_0x581a('41')]];if(!l1iIi11I){await ii1iIi1i();}l1iIi11I[_0x581a('c8')][_0x581a('c9')](_0x581a('ca')+_0x4d2d6d,_0x26979e[_0x581a('ca')+_0x4d2d6d]||'');l1iIi11I[_0x581a('c8')][_0x581a('c9')](_0x581a('cb')+_0x4d2d6d,_0x26979e[_0x581a('cb')+_0x4d2d6d]||'');l1iIi11I[_0x581a('c8')][_0x581a('c9')](_0x581a('cc')+_0x4d2d6d,_0x26979e[_0x581a('cc')+_0x4d2d6d]||'');return new Promise(async _0x3b189b=>{let _0x5d99ca='';try{if(typeof l1iIi11I[_0x581a('cd')]===_0x581a('ce')){_0x5d99ca=await l1iIi11I[_0x581a('cd')](_0x4d2d6d,_0x33293a);}else{let _0x12b5de=0x0;timer=setInterval(async()=>{_0x12b5de++;if(typeof l1iIi11I[_0x581a('cd')]===_0x581a('ce')){clearInterval(timer);timer=null;_0x5d99ca=await l1iIi11I[_0x581a('cd')](_0x4d2d6d,_0x33293a);}if(_0x12b5de>=0x64){clearInterval(timer);}},0x64);}}catch(_0x6a23e6){console[_0x581a('a')](_0x6a23e6);}finally{if(_0x5d99ca){_0x26979e[_0x581a('ca')+_0x4d2d6d]=l1iIi11I[_0x581a('c8')][_0x581a('cf')](_0x581a('ca')+_0x4d2d6d);_0x26979e[_0x581a('cb')+_0x4d2d6d]=l1iIi11I[_0x581a('c8')][_0x581a('cf')](_0x581a('cb')+_0x4d2d6d);_0x26979e[_0x581a('cc')+_0x4d2d6d]=l1iIi11I[_0x581a('c8')][_0x581a('cf')](_0x581a('cc')+_0x4d2d6d);}_0x3b189b(_0x5d99ca);}});}function li1IlIl1(){class _0x4dd979{constructor(){this[_0x581a('21')]='';this[_0x581a('d0')]=0x0;this['\x6d\x72']=[0x1,0x0];this[_0x581a('d1')]={'cookie':'','cookies':_0x581a('d2'),'domain':_0x581a('d3'),'referrer':_0x581a('af'),'location':{'href':_0x581a('77'),'hrefs':_0x581a('77')}};this[_0x581a('d4')]={'userAgent':_0x581a('ba'),'userAgents':_0x581a('ba')};this[_0x581a('c7')]={};}[_0x581a('57')](_0x6f716d='',_0x3dffc1='',_0x4f4b85='',_0x2d967b=''){try{this[_0x581a('d1')][_0x581a('ad')][_0x581a('d5')]=this[_0x581a('d1')][_0x581a('ad')][_0x581a('d6')]+'';this[_0x581a('d1')][_0x581a('10')]=this[_0x581a('d1')][_0x581a('d7')]+'';if(_0x4f4b85)this[_0x581a('d1')][_0x581a('ad')][_0x581a('d5')]=_0x4f4b85;if(_0x2d967b)this[_0x581a('d1')][_0x581a('10')]=_0x2d967b;this[_0x581a('21')]='';this[_0x581a('d4')][_0x581a('d8')]=this[_0x581a('d4')][_0x581a('d9')]+'';this[_0x581a('d0')]=0x3f3+Math[_0x581a('da')](0x1f*Math[_0x581a('4a')]());if(![]){this['\x6d\x72'][0x1]++;if(this['\x6d\x72'][0x1]>=0x13a){this['\x6d\x72'][0x1]=Math[_0x581a('da')](0x1f*Math[_0x581a('4a')]());}if(!_0x3dffc1){_0x3dffc1=$[_0x581a('0')][_0x581a('bb')]('')[_0x581a('bd')]();}let _0xcf4564=0x0;while(!![]){this['\x6d\x72'][0x0]=parseInt(_0x3dffc1[_0x581a('42')](/\d/g)[_0xcf4564]);_0xcf4564++;if(this['\x6d\x72'][0x0]>0x0||_0xcf4564>=_0x3dffc1[_0x581a('42')](/\d/g)[_0x581a('26')]){break;}}this['\x6d\x72'][0x0]+=Math[_0x581a('da')]((new Date()[_0x581a('1e')]()-new Date(_0x581a('db'))[_0x581a('1e')]())/0x5265c00);}if(_0x6f716d)this[_0x581a('d4')][_0x581a('d8')]=_0x6f716d;this['\x6c\x72']={'ckJda':_0x581a('dc'),'ckJdb':_0x581a('dd'),'ckJdv':_0x581a('de'),'ckJdc':_0x581a('df'),'refUrl':_0x581a('af')};this['\x71']();this['\x73'](_0x3dffc1);return this[_0x581a('21')];}catch(_0x34ab85){console[_0x581a('a')](_0x34ab85);}}['\x73'](_0x3d211e=''){var _0x5bc5bf,_0x50dadd,_0x38f5fa,_0x20782d,_0x22f8e3=(this[_0x581a('e0')](this['\x6c\x72'][_0x581a('e1')])||'')[_0x581a('15')]('\x2e'),_0x59deda=(this[_0x581a('e0')](this['\x6c\x72'][_0x581a('e2')])||'')[_0x581a('15')]('\x2e'),_0x4b6340=(this[_0x581a('e0')](this['\x6c\x72'][_0x581a('e3')])||'')[_0x581a('15')]('\x7c'),_0x32b249=this[_0x581a('e0')](this['\x6c\x72'][_0x581a('e4')])||'',_0x270e48=parseInt((new Date()[_0x581a('1e')]()-this[_0x581a('d0')])/0x3e8),_0x2cf063=0x0,_0x42361f=0x1,_0x12d857=_0x581a('e5'),_0x3db188='\x2d',_0x4900ab=_0x581a('e6'),_0x44e513='\x2d';if(_0x22f8e3[_0x581a('26')]>0x3)for(var _0x3a6e9e=0x2;_0x3a6e9e<0x5&&_0x3a6e9e<_0x22f8e3[_0x581a('26')];_0x3a6e9e++){var _0x3a6f1e=_0x22f8e3[_0x3a6e9e];_0x3a6f1e[_0x581a('26')]>0xa&&(_0x22f8e3[_0x3a6e9e]=_0x3a6f1e[_0x581a('e7')](0x0,0xa));}_0x22f8e3[_0x581a('26')]>0x5?(_0x38f5fa=_0x22f8e3[0x0],_0x20782d=_0x22f8e3[0x1],_0x5bc5bf=parseInt(_0x22f8e3[0x2],0xa),_0x50dadd=parseInt(_0x22f8e3[0x3],0xa),_0x270e48=parseInt(_0x22f8e3[0x4],0xa),_0x42361f=parseInt(_0x22f8e3[0x5],0xa)||_0x42361f):(_0x20782d=this[_0x581a('e8')](),_0x5bc5bf=_0x270e48,_0x50dadd=_0x270e48),this['\x6c\x72'][_0x581a('e9')]=_0x20782d,_0x59deda[_0x581a('26')]>0x3&&(_0x38f5fa||(_0x38f5fa=_0x59deda[0x0]),_0x2cf063=parseInt(_0x59deda[0x1],0xa)||0x0),_0x4b6340[_0x581a('26')]>0x4&&(_0x38f5fa||(_0x38f5fa=_0x4b6340[0x0]),_0x12d857=_0x4b6340[0x1],_0x3db188=_0x4b6340[0x2],_0x4900ab=_0x4b6340[0x3],_0x44e513=_0x4b6340[0x4]),_0x32b249&&''!==_0x32b249&&(_0x38f5fa||(_0x38f5fa=_0x32b249));var _0x539f3d,_0x5237fe=[],_0x361e9e=_0x59deda[_0x581a('26')]<0x4,_0xb23afb=this[_0x581a('ea')](_0x581a('eb')),_0x4be9f7=!0x1;if(_0xb23afb){var _0x5188ab=this[_0x581a('ea')](_0x581a('ec')),_0x4e425a=this[_0x581a('ea')](_0x581a('ed')),_0x59a9a9=this[_0x581a('ea')](_0x581a('ee'));_0x5237fe[_0x581a('6')](_0xb23afb||_0x12d857),_0x5237fe[_0x581a('6')](_0x5188ab||_0x3db188),_0x5237fe[_0x581a('6')](_0x4e425a||_0x4900ab),_0x5237fe[_0x581a('6')](_0x59a9a9||_0x44e513),_0x44e513=_0x5237fe[0x3],_0x4be9f7=!0x0;}else{var _0x393d0b,_0x197595=this['\x6c\x72'][_0x581a('ef')]&&this['\x6c\x72'][_0x581a('ef')][_0x581a('15')]('\x2f')[0x2],_0x1d4c27=!0x1;if(_0x197595&&_0x197595[_0x581a('68')](this['\x6c\x72'][_0x581a('f0')])<0x0){for(_0x393d0b=this['\x6c\x72'][_0x581a('f1')],_0x3a6e9e=0x0;_0x3a6e9e<_0x393d0b[_0x581a('26')];_0x3a6e9e++){var _0x294ef4=_0x393d0b[_0x3a6e9e][_0x581a('15')]('\x3a');if(_0x197595[_0x581a('68')](_0x294ef4[0x0][_0x581a('f2')]())>-0x1&&this['\x6c\x72'][_0x581a('ef')][_0x581a('68')]((_0x294ef4[0x1]+'\x3d')[_0x581a('f2')]())>-0x1){var _0x178f0a=this[_0x581a('ea')](_0x294ef4[0x1],this['\x6c\x72'][_0x581a('ef')]);/[^\x00-\xff]/[_0x581a('23')](_0x178f0a)&&(_0x178f0a=encodeURIComponent(_0x178f0a)),_0x5237fe[_0x581a('6')](_0x294ef4[0x0]),_0x5237fe[_0x581a('6')]('\x2d'),_0x5237fe[_0x581a('6')](_0x581a('f3')),_0x5237fe[_0x581a('6')](_0x178f0a||_0x581a('f4')),_0x44e513=_0x5237fe[0x3],_0x1d4c27=!0x0;break;}}_0x1d4c27||(_0x197595[_0x581a('68')](_0x581a('f5'))>-0x1?(_0x5237fe[_0x581a('6')](_0x581a('f5')),_0x5237fe[_0x581a('6')]('\x2d'),_0x5237fe[_0x581a('6')](_0x581a('f6')),_0x5237fe[_0x581a('6')](_0x581a('f4'))):(_0x5237fe[_0x581a('6')](_0x197595),_0x5237fe[_0x581a('6')]('\x2d'),_0x5237fe[_0x581a('6')](_0x581a('f7')),_0x5237fe[_0x581a('6')]('\x2d')));}}_0x539f3d=_0x5237fe[_0x581a('26')]>0x0&&(_0x5237fe[0x0]!==_0x12d857||_0x5237fe[0x1]!==_0x3db188||_0x5237fe[0x2]!==_0x4900ab)&&_0x581a('f7')!==_0x5237fe[0x2],_0x361e9e||!_0x361e9e&&_0x539f3d?(_0x12d857=_0x5237fe[0x0]||_0x12d857,_0x3db188=_0x5237fe[0x1]||_0x3db188,_0x4900ab=_0x5237fe[0x2]||_0x4900ab,_0x44e513=_0x5237fe[0x3]||_0x44e513,_0x22f8e3[_0x581a('26')]>0x5?(_0x5bc5bf=parseInt(_0x22f8e3[0x2],0xa),_0x50dadd=parseInt(_0x22f8e3[0x4],0xa),_0x270e48=parseInt((new Date()[_0x581a('1e')]()-this[_0x581a('d0')])/0x3e8),_0x42361f++,_0x2cf063=0x1):(_0x42361f=0x1,_0x2cf063=0x1)):_0x2cf063++;var _0x1e1665=this[_0x581a('f8')]();if(_0x1e1665&&_0x1e1665[_0x581a('f9')]){var _0x2ad61f=0x1*_0x1e1665[_0x581a('f9')],_0x202668=0x1*_0x1e1665[_0x581a('fa')];(_0x2ad61f>_0x42361f||_0x2ad61f===_0x42361f&&_0x202668>=_0x2cf063)&&(_0x42361f=_0x2ad61f,_0x2cf063=_0x202668+0x1);}if(_0x38f5fa||(_0x38f5fa=this[_0x581a('fb')](this['\x6c\x72'][_0x581a('f0')])),this[_0x581a('fc')](this['\x6c\x72'][_0x581a('e1')],[_0x38f5fa,_0x20782d,_0x5bc5bf,_0x50dadd,_0x270e48,_0x42361f||0x1][_0x581a('fd')]('\x2e'),this['\x6c\x72'][_0x581a('f0')],this['\x6c\x72'][_0x581a('fe')]),this[_0x581a('fc')](this['\x6c\x72'][_0x581a('e2')],[_0x38f5fa,_0x2cf063,_0x20782d+'\x7c'+_0x42361f,_0x270e48][_0x581a('fd')]('\x2e'),this['\x6c\x72'][_0x581a('f0')],this['\x6c\x72'][_0x581a('ff')]),_0x4be9f7||_0x539f3d||_0x4b6340[_0x581a('26')]<0x5){var _0x2740f=[_0x38f5fa,_0x12d857||_0x581a('e5'),_0x3db188||'\x2d',_0x4900ab||_0x581a('e6'),_0x44e513||'\x2d',new Date()[_0x581a('1e')]()-this[_0x581a('d0')]][_0x581a('fd')]('\x7c');this[_0x581a('100')](_0x2740f=encodeURIComponent(_0x2740f),_0x38f5fa);}this[_0x581a('fc')](this['\x6c\x72'][_0x581a('e4')],_0x38f5fa,this['\x6c\x72'][_0x581a('f0')]);if(![]){this[_0x581a('fc')](_0x581a('101'),this['\x6d\x72'][_0x581a('fd')]('\x2e'),this['\x6c\x72'][_0x581a('f0')]);this[_0x581a('fc')](_0x581a('102'),[_0x20782d,this['\x6d\x72'][0x0],new Date()[_0x581a('1e')]()][_0x581a('fd')]('\x2e'),this['\x6c\x72'][_0x581a('f0')]);var _0x2cf063=0x0;var _0x1649d6='';if(_0x3d211e){while(!![]){_0x1649d6+=_0x3d211e[_0x581a('42')](/\d/g)[_0x2cf063];_0x2cf063++;if(_0x1649d6[_0x581a('15')]('')[_0x581a('26')]>=0x2||_0x2cf063>=_0x3d211e[_0x581a('42')](/\d/g)[_0x581a('26')]){break;}}}}}['\x71'](){this['\x6c\x72'][_0x581a('103')]=this['\x6c\x72'][_0x581a('103')]||_0x581a('104'),this['\x6c\x72'][_0x581a('105')]='\x2f\x2f'+this['\x6c\x72'][_0x581a('103')]+_0x581a('106'),this['\x6c\x72'][_0x581a('107')]={'pv':'\x31','pf':'\x32','cl':'\x33','od':'\x34','pd':'\x35','hm':'\x36','magic':_0x581a('108')},this['\x6c\x72'][_0x581a('109')]?(this['\x6c\x72'][_0x581a('e1')]=_0x581a('10a'),this['\x6c\x72'][_0x581a('e2')]=_0x581a('10b'),this['\x6c\x72'][_0x581a('e4')]=_0x581a('10c'),this['\x6c\x72'][_0x581a('10d')]=_0x581a('10e')):(this['\x6c\x72'][_0x581a('e1')]=_0x581a('dc'),this['\x6c\x72'][_0x581a('e2')]=_0x581a('dd'),this['\x6c\x72'][_0x581a('e4')]=_0x581a('df'),this['\x6c\x72'][_0x581a('10d')]=_0x581a('10f')),this['\x6c\x72'][_0x581a('e3')]=_0x581a('de'),this['\x6c\x72'][_0x581a('110')]=_0x581a('111'),this['\x6c\x72'][_0x581a('112')]=_0x581a('113'),this['\x6c\x72'][_0x581a('fe')]=0x39ef8b000,this['\x6c\x72'][_0x581a('ff')]=0x1b7740,this['\x6c\x72'][_0x581a('114')]=0x39ef8b000,this['\x6c\x72'][_0x581a('115')]=0x4d3f6400,this['\x6c\x72'][_0x581a('116')]=0x5265c00,this['\x6c\x72'][_0x581a('117')]=0x39ef8b000,this['\x6c\x72'][_0x581a('118')]=0x757b12c00,this['\x6c\x72'][_0x581a('f0')]=(this[_0x581a('d1')][_0x581a('119')][_0x581a('42')](/[^.]+\.(com.cn|net.cn|org.cn|gov.cn|edu.cn)$/)||[''])[0x0]||this[_0x581a('d1')][_0x581a('119')][_0x581a('a5')](/.*?([^.]+\.[^.]+)$/,'\x24\x31'),this['\x6c\x72'][_0x581a('11a')]=this[_0x581a('d1')][_0x581a('11a')],this['\x6c\x72'][_0x581a('ef')]=this[_0x581a('d1')][_0x581a('11b')],this['\x6c\x72'][_0x581a('f1')]=[_0x581a('11c'),_0x581a('11d'),_0x581a('11e'),_0x581a('11f'),_0x581a('120'),_0x581a('121'),_0x581a('122'),_0x581a('123'),_0x581a('124'),_0x581a('125'),_0x581a('126'),_0x581a('127'),_0x581a('128'),_0x581a('129'),_0x581a('12a'),_0x581a('12b'),_0x581a('12c'),_0x581a('12d'),_0x581a('12e'),_0x581a('12f'),_0x581a('130'),_0x581a('131'),_0x581a('132'),_0x581a('133'),_0x581a('134'),_0x581a('135')];}[_0x581a('fc')](_0x347c15,_0x12b935,_0x49fe5c,_0x45af7c){if(_0x347c15){var _0x16d945='';if(_0x45af7c){var _0x33786a=new Date();_0x33786a[_0x581a('136')](_0x33786a[_0x581a('1e')]()-this[_0x581a('d0')]+_0x45af7c),_0x16d945=_0x581a('137')+_0x33786a[_0x581a('138')]();}this[_0x581a('21')]+=_0x347c15+'\x3d'+_0x12b935+'\x3b\x20';}}[_0x581a('100')](_0x68137,_0x4078c1,_0x4f3060){var _0x360de7='';_0x360de7=this[_0x581a('139')](0xa)&&(!_0x68137||_0x68137[_0x581a('26')]>0x190)?_0x4078c1+_0x581a('13a')+(new Date()[_0x581a('1e')]()-this[_0x581a('d0')]):_0x68137;var _0x16f4d2=_0x4f3060||this[_0x581a('13b')]()?this['\x6c\x72'][_0x581a('116')]:this['\x6c\x72'][_0x581a('115')];this[_0x581a('fc')](this['\x6c\x72'][_0x581a('e3')]||_0x581a('de'),_0x360de7,this['\x6c\x72'][_0x581a('f0')],_0x16f4d2);}[_0x581a('e0')](_0x3a50b3,_0x3d28e2){var _0x207399=this[_0x581a('d1')][_0x581a('10')][_0x581a('42')](new RegExp(_0x581a('13c')+_0x3a50b3+_0x581a('13d')));return null!==_0x207399?_0x3d28e2?_0x207399[0x2]:this[_0x581a('13e')](_0x207399[0x2]):'';}[_0x581a('e8')](){return new Date()[_0x581a('1e')]()-this[_0x581a('d0')]+''+parseInt(0x7fffffff*Math[_0x581a('4a')]());}[_0x581a('ea')](_0x2ff0e7,_0x5786e9){var _0x47871e=_0x5786e9||this[_0x581a('d1')][_0x581a('ad')][_0x581a('d5')],_0x560249=new RegExp(_0x581a('13f')+_0x2ff0e7+_0x581a('140'))[_0x581a('141')](_0x47871e);return _0x560249?this[_0x581a('13e')](_0x560249[0x1]):null;}[_0x581a('13e')](_0xdd52d3){try{return decodeURIComponent(_0xdd52d3);}catch(_0x3d8c80){return _0xdd52d3;}}[_0x581a('fb')](_0x36c59c){var _0x135041,_0x2b21b0=0x1,_0x9d768c=0x0;if(_0x36c59c)for(_0x2b21b0=0x0,_0x135041=_0x36c59c[_0x581a('26')]-0x1;_0x135041>=0x0;_0x135041--){_0x2b21b0=0x0!==(_0x9d768c=0xfe00000&(_0x2b21b0=(_0x2b21b0<<0x6&0xfffffff)+(_0x9d768c=_0x36c59c[_0x581a('142')](_0x135041))+(_0x9d768c<<0xe)))?_0x2b21b0^_0x9d768c>>0x15:_0x2b21b0;}return _0x2b21b0;}[_0x581a('139')](_0x35a12c){if(_0x35a12c>=0x64)return!0x0;var _0x1d78eb=this['\x6c\x72'][_0x581a('e9')],_0x9a063b=_0x1d78eb[_0x581a('e7')](_0x1d78eb[_0x581a('26')]-0x2);return!!_0x9a063b&&0x1*_0x9a063b<_0x35a12c;}[_0x581a('13b')](){var _0x36a4f1=this[_0x581a('d4')][_0x581a('d8')]||'';return/^(jdapp|jdltapp|jdpingou);/[_0x581a('23')](_0x36a4f1)||this[_0x581a('143')]();}[_0x581a('143')](){return(this[_0x581a('d4')][_0x581a('d8')]||'')[_0x581a('68')](_0x581a('144'))>-0x1;}[_0x581a('f8')](){var _0x411516,_0x47bb39;try{this[_0x581a('c7')][_0x581a('145')]&&this[_0x581a('c7')][_0x581a('145')][_0x581a('146')]?_0x47bb39=JDMAUnifyBridge[_0x581a('146')]():this[_0x581a('c7')][_0x581a('146')]?_0x47bb39=JDMAGetMPageParam():this[_0x581a('c7')][_0x581a('147')]&&this[_0x581a('c7')][_0x581a('147')][_0x581a('148')]&&this[_0x581a('c7')][_0x581a('147')][_0x581a('148')][_0x581a('149')]&&(_0x47bb39=this[_0x581a('c7')][_0x581a('14a')](_0x581a('146'),'')),_0x47bb39&&(_0x411516=JSON[_0x581a('b5')](_0x47bb39));}catch(_0x5aa8c7){}return _0x411516;}[_0x581a('16')](_0x1a22c1,_0x88975f=null){const _0x5b798e=_0x88975f?new Date(_0x88975f):new Date();let _0x5c6895={'M+':_0x5b798e[_0x581a('14b')]()+0x1,'d+':_0x5b798e[_0x581a('14c')](),'H+':_0x5b798e[_0x581a('4b')](),'m+':_0x5b798e[_0x581a('14d')](),'s+':_0x5b798e[_0x581a('14e')](),'q+':Math[_0x581a('69')]((_0x5b798e[_0x581a('14b')]()+0x3)/0x3),'S':_0x5b798e[_0x581a('14f')]()};/(y+)/[_0x581a('23')](_0x1a22c1)&&(_0x1a22c1=_0x1a22c1[_0x581a('a5')](RegExp['\x24\x31'],(_0x5b798e[_0x581a('150')]()+'')[_0x581a('e7')](0x4-RegExp['\x24\x31'][_0x581a('26')])));for(let _0x88975f in _0x5c6895)new RegExp('\x28'+_0x88975f+'\x29')[_0x581a('23')](_0x1a22c1)&&(_0x1a22c1=_0x1a22c1[_0x581a('a5')](RegExp['\x24\x31'],0x1==RegExp['\x24\x31'][_0x581a('26')]?_0x5c6895[_0x88975f]:('\x30\x30'+_0x5c6895[_0x88975f])[_0x581a('e7')]((''+_0x5c6895[_0x88975f])[_0x581a('26')])));return _0x1a22c1;}}I1i111i=new _0x4dd979();};;_0xodR='jsjiami.com.v6';
function randomString(e) {
    e = e || 32;
    let t = "abcdef0123456789", a = t.length, n = "";
    for (i = 0; i < e; i++)
        n += t.charAt(Math.floor(Math.random() * a));
    return n
}
const navigator = {
    userAgent: `jdapp;iPhone;10.1.4;14.3;${$.CryptoJS.SHA1(randomString(40)).toString()};M/5.0;network/wifi;ADID/;model/iPhone12,1;addressid/;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1`,
    plugins: { length: 0 },
    language: "zh-CN",
};
const screen = {
    availHeight: 812,
    availWidth: 375,
    colorDepth: 24,
    height: 812,
    width: 375,
    pixelDepth: 24,
};
const window = {};
const document = {
    location: {
        ancestorOrigins: {},
        href: "https://prodev.m.jd.com/mall/active/3re5ajBZWA71ygjVnAz9kbaU1tfw/index.html",
        origin: "https://prodev.m.jd.com",
        protocol: "https:",
        host: "prodev.m.jd.com",
        hostname: "prodev.m.jd.com",
        port: "",
        pathname: "/mall/active/3re5ajBZWA71ygjVnAz9kbaU1tfw/index.html",
        search: "",
        hash: "",
    },
};
var start_time = new Date().getTime(),
    _jdfp_canvas_md5 = "",
    _jdfp_webgl_md5 = "",
    _fingerprint_step = 1,
    _JdEid = "",
    _eidFlag = !1,
    risk_jd_local_fingerprint = "",
    _jd_e_joint_;

function t(a) {
    if (null == a || void 0 == a || "" == a) return "NA";
    if (null == a || void 0 == a || "" == a) var b = "";
    else {
        b = [];
        for (var c = 0; c < 8 * a.length; c += 8)
            b[c >> 5] |= (a.charCodeAt(c / 8) & 255) << c % 32;
    }
    a = 8 * a.length;
    b[a >> 5] |= 128 << a % 32;
    b[(((a + 64) >>> 9) << 4) + 14] = a;
    a = 1732584193;
    c = -271733879;
    for (var l = -1732584194, h = 271733878, q = 0; q < b.length; q += 16) {
        var z = a,
            C = c,
            D = l,
            B = h;
        a = v(a, c, l, h, b[q + 0], 7, -680876936);
        h = v(h, a, c, l, b[q + 1], 12, -389564586);
        l = v(l, h, a, c, b[q + 2], 17, 606105819);
        c = v(c, l, h, a, b[q + 3], 22, -1044525330);
        a = v(a, c, l, h, b[q + 4], 7, -176418897);
        h = v(h, a, c, l, b[q + 5], 12, 1200080426);
        l = v(l, h, a, c, b[q + 6], 17, -1473231341);
        c = v(c, l, h, a, b[q + 7], 22, -45705983);
        a = v(a, c, l, h, b[q + 8], 7, 1770035416);
        h = v(h, a, c, l, b[q + 9], 12, -1958414417);
        l = v(l, h, a, c, b[q + 10], 17, -42063);
        c = v(c, l, h, a, b[q + 11], 22, -1990404162);
        a = v(a, c, l, h, b[q + 12], 7, 1804603682);
        h = v(h, a, c, l, b[q + 13], 12, -40341101);
        l = v(l, h, a, c, b[q + 14], 17, -1502002290);
        c = v(c, l, h, a, b[q + 15], 22, 1236535329);
        a = x(a, c, l, h, b[q + 1], 5, -165796510);
        h = x(h, a, c, l, b[q + 6], 9, -1069501632);
        l = x(l, h, a, c, b[q + 11], 14, 643717713);
        c = x(c, l, h, a, b[q + 0], 20, -373897302);
        a = x(a, c, l, h, b[q + 5], 5, -701558691);
        h = x(h, a, c, l, b[q + 10], 9, 38016083);
        l = x(l, h, a, c, b[q + 15], 14, -660478335);
        c = x(c, l, h, a, b[q + 4], 20, -405537848);
        a = x(a, c, l, h, b[q + 9], 5, 568446438);
        h = x(h, a, c, l, b[q + 14], 9, -1019803690);
        l = x(l, h, a, c, b[q + 3], 14, -187363961);
        c = x(c, l, h, a, b[q + 8], 20, 1163531501);
        a = x(a, c, l, h, b[q + 13], 5, -1444681467);
        h = x(h, a, c, l, b[q + 2], 9, -51403784);
        l = x(l, h, a, c, b[q + 7], 14, 1735328473);
        c = x(c, l, h, a, b[q + 12], 20, -1926607734);
        a = u(c ^ l ^ h, a, c, b[q + 5], 4, -378558);
        h = u(a ^ c ^ l, h, a, b[q + 8], 11, -2022574463);
        l = u(h ^ a ^ c, l, h, b[q + 11], 16, 1839030562);
        c = u(l ^ h ^ a, c, l, b[q + 14], 23, -35309556);
        a = u(c ^ l ^ h, a, c, b[q + 1], 4, -1530992060);
        h = u(a ^ c ^ l, h, a, b[q + 4], 11, 1272893353);
        l = u(h ^ a ^ c, l, h, b[q + 7], 16, -155497632);
        c = u(l ^ h ^ a, c, l, b[q + 10], 23, -1094730640);
        a = u(c ^ l ^ h, a, c, b[q + 13], 4, 681279174);
        h = u(a ^ c ^ l, h, a, b[q + 0], 11, -358537222);
        l = u(h ^ a ^ c, l, h, b[q + 3], 16, -722521979);
        c = u(l ^ h ^ a, c, l, b[q + 6], 23, 76029189);
        a = u(c ^ l ^ h, a, c, b[q + 9], 4, -640364487);
        h = u(a ^ c ^ l, h, a, b[q + 12], 11, -421815835);
        l = u(h ^ a ^ c, l, h, b[q + 15], 16, 530742520);
        c = u(l ^ h ^ a, c, l, b[q + 2], 23, -995338651);
        a = w(a, c, l, h, b[q + 0], 6, -198630844);
        h = w(h, a, c, l, b[q + 7], 10, 1126891415);
        l = w(l, h, a, c, b[q + 14], 15, -1416354905);
        c = w(c, l, h, a, b[q + 5], 21, -57434055);
        a = w(a, c, l, h, b[q + 12], 6, 1700485571);
        h = w(h, a, c, l, b[q + 3], 10, -1894986606);
        l = w(l, h, a, c, b[q + 10], 15, -1051523);
        c = w(c, l, h, a, b[q + 1], 21, -2054922799);
        a = w(a, c, l, h, b[q + 8], 6, 1873313359);
        h = w(h, a, c, l, b[q + 15], 10, -30611744);
        l = w(l, h, a, c, b[q + 6], 15, -1560198380);
        c = w(c, l, h, a, b[q + 13], 21, 1309151649);
        a = w(a, c, l, h, b[q + 4], 6, -145523070);
        h = w(h, a, c, l, b[q + 11], 10, -1120210379);
        l = w(l, h, a, c, b[q + 2], 15, 718787259);
        c = w(c, l, h, a, b[q + 9], 21, -343485551);
        a = A(a, z);
        c = A(c, C);
        l = A(l, D);
        h = A(h, B);
    }
    b = [a, c, l, h];
    a = "";
    for (c = 0; c < 4 * b.length; c++)
        a +=
            "0123456789abcdef".charAt((b[c >> 2] >> ((c % 4) * 8 + 4)) & 15) +
            "0123456789abcdef".charAt((b[c >> 2] >> ((c % 4) * 8)) & 15);
    return a;
}

function u(a, b, c, l, h, q) {
    a = A(A(b, a), A(l, q));
    return A((a << h) | (a >>> (32 - h)), c);
}

function v(a, b, c, l, h, q, z) {
    return u((b & c) | (~b & l), a, b, h, q, z);
}

function x(a, b, c, l, h, q, z) {
    return u((b & l) | (c & ~l), a, b, h, q, z);
}

function w(a, b, c, l, h, q, z) {
    return u(c ^ (b | ~l), a, b, h, q, z);
}

function A(a, b) {
    var c = (a & 65535) + (b & 65535);
    return (((a >> 16) + (b >> 16) + (c >> 16)) << 16) | (c & 65535);
}
_fingerprint_step = 2;
var y = "",
    n = navigator.userAgent.toLowerCase();
n.indexOf("jdapp") && (n = n.substring(0, 90));
var e = navigator.language,
    f = n;
-1 != f.indexOf("ipad") ||
-1 != f.indexOf("iphone os") ||
-1 != f.indexOf("midp") ||
-1 != f.indexOf("rv:1.2.3.4") ||
-1 != f.indexOf("ucweb") ||
-1 != f.indexOf("android") ||
-1 != f.indexOf("windows ce") ||
f.indexOf("windows mobile");
var r = "NA",
    k = "NA";
try {
    -1 != f.indexOf("win") &&
    -1 != f.indexOf("95") &&
    ((r = "windows"), (k = "95")),
    -1 != f.indexOf("win") &&
    -1 != f.indexOf("98") &&
    ((r = "windows"), (k = "98")),
    -1 != f.indexOf("win 9x") &&
    -1 != f.indexOf("4.90") &&
    ((r = "windows"), (k = "me")),
    -1 != f.indexOf("win") &&
    -1 != f.indexOf("nt 5.0") &&
    ((r = "windows"), (k = "2000")),
    -1 != f.indexOf("win") &&
    -1 != f.indexOf("nt") &&
    ((r = "windows"), (k = "NT")),
    -1 != f.indexOf("win") &&
    -1 != f.indexOf("nt 5.1") &&
    ((r = "windows"), (k = "xp")),
    -1 != f.indexOf("win") &&
    -1 != f.indexOf("32") &&
    ((r = "windows"), (k = "32")),
    -1 != f.indexOf("win") &&
    -1 != f.indexOf("nt 5.1") &&
    ((r = "windows"), (k = "7")),
    -1 != f.indexOf("win") &&
    -1 != f.indexOf("6.0") &&
    ((r = "windows"), (k = "8")),
    -1 == f.indexOf("win") ||
    (-1 == f.indexOf("nt 6.0") && -1 == f.indexOf("nt 6.1")) ||
    ((r = "windows"), (k = "9")),
    -1 != f.indexOf("win") &&
    -1 != f.indexOf("nt 6.2") &&
    ((r = "windows"), (k = "10")),
    -1 != f.indexOf("linux") && (r = "linux"),
    -1 != f.indexOf("unix") && (r = "unix"),
    -1 != f.indexOf("sun") && -1 != f.indexOf("os") && (r = "sun os"),
    -1 != f.indexOf("ibm") && -1 != f.indexOf("os") && (r = "ibm os/2"),
    -1 != f.indexOf("mac") && -1 != f.indexOf("pc") && (r = "mac"),
    -1 != f.indexOf("aix") && (r = "aix"),
    -1 != f.indexOf("powerpc") && (r = "powerPC"),
    -1 != f.indexOf("hpux") && (r = "hpux"),
    -1 != f.indexOf("netbsd") && (r = "NetBSD"),
    -1 != f.indexOf("bsd") && (r = "BSD"),
    -1 != f.indexOf("osf1") && (r = "OSF1"),
    -1 != f.indexOf("irix") && ((r = "IRIX"), (k = "")),
    -1 != f.indexOf("freebsd") && (r = "FreeBSD"),
    -1 != f.indexOf("symbianos") &&
    ((r = "SymbianOS"), (k = f.substring(f.indexOf("SymbianOS/") + 10, 3)));
} catch (a) {}
_fingerprint_step = 3;
var g = "NA",
    m = "NA";
try {
    -1 != f.indexOf("msie") &&
    ((g = "ie"),
        (m = f.substring(f.indexOf("msie ") + 5)),
    m.indexOf(";") && (m = m.substring(0, m.indexOf(";"))));
    -1 != f.indexOf("firefox") &&
    ((g = "Firefox"), (m = f.substring(f.indexOf("firefox/") + 8)));
    -1 != f.indexOf("opera") &&
    ((g = "Opera"), (m = f.substring(f.indexOf("opera/") + 6, 4)));
    -1 != f.indexOf("safari") &&
    ((g = "safari"), (m = f.substring(f.indexOf("safari/") + 7)));
    -1 != f.indexOf("chrome") &&
    ((g = "chrome"),
        (m = f.substring(f.indexOf("chrome/") + 7)),
    m.indexOf(" ") && (m = m.substring(0, m.indexOf(" "))));
    -1 != f.indexOf("navigator") &&
    ((g = "navigator"), (m = f.substring(f.indexOf("navigator/") + 10)));
    -1 != f.indexOf("applewebkit") &&
    ((g = "applewebkit_chrome"),
        (m = f.substring(f.indexOf("applewebkit/") + 12)),
    m.indexOf(" ") && (m = m.substring(0, m.indexOf(" "))));
    -1 != f.indexOf("sogoumobilebrowser") &&
    (g = "\u641c\u72d7\u624b\u673a\u6d4f\u89c8\u5668");
    if (-1 != f.indexOf("ucbrowser") || -1 != f.indexOf("ucweb"))
        g = "UC\u6d4f\u89c8\u5668";
    if (-1 != f.indexOf("qqbrowser") || -1 != f.indexOf("tencenttraveler"))
        g = "QQ\u6d4f\u89c8\u5668";
    -1 != f.indexOf("metasr") && (g = "\u641c\u72d7\u6d4f\u89c8\u5668");
    -1 != f.indexOf("360se") && (g = "360\u6d4f\u89c8\u5668");
    -1 != f.indexOf("the world") &&
    (g = "\u4e16\u754c\u4e4b\u7a97\u6d4f\u89c8\u5668");
    -1 != f.indexOf("maxthon") && (g = "\u9068\u6e38\u6d4f\u89c8\u5668");
} catch (a) {}

class JdJrTdRiskFinger {
    f = {
        options: function () {
            return {};
        },
        nativeForEach: Array.prototype.forEach,
        nativeMap: Array.prototype.map,
        extend: function (a, b) {
            if (null == a) return b;
            for (var c in a) null != a[c] && b[c] !== a[c] && (b[c] = a[c]);
            return b;
        },
        getData: function () {
            return y;
        },
        get: function (a) {
            var b = 1 * m,
                c = [];
            "ie" == g && 7 <= b
                ? (c.push(n),
                    c.push(e),
                    (y = y + ",'userAgent':'" + t(n) + "','language':'" + e + "'"),
                    this.browserRedirect(n))
                : ((c = this.userAgentKey(c)), (c = this.languageKey(c)));
            c.push(g);
            c.push(m);
            c.push(r);
            c.push(k);
            y =
                y +
                ",'os':'" +
                r +
                "','osVersion':'" +
                k +
                "','browser':'" +
                g +
                "','browserVersion':'" +
                m +
                "'";
            c = this.colorDepthKey(c);
            c = this.screenResolutionKey(c);
            c = this.timezoneOffsetKey(c);
            c = this.sessionStorageKey(c);
            c = this.localStorageKey(c);
            c = this.indexedDbKey(c);
            c = this.addBehaviorKey(c);
            c = this.openDatabaseKey(c);
            c = this.cpuClassKey(c);
            c = this.platformKey(c);
            c = this.hardwareConcurrencyKey(c);
            c = this.doNotTrackKey(c);
            c = this.pluginsKey(c);
            c = this.canvasKey(c);
            c = this.webglKey(c);
            b = this.x64hash128(c.join("~~~"), 31);
            return a(b);
        },
        userAgentKey: function (a) {
            a.push(navigator.userAgent),
                (y = y + ",'userAgent':'" + t(navigator.userAgent) + "'"),
                this.browserRedirect(navigator.userAgent);
            return a;
        },
        replaceAll: function (a, b, c) {
            for (; 0 <= a.indexOf(b); ) a = a.replace(b, c);
            return a;
        },
        browserRedirect: function (a) {
            var b = a.toLowerCase();
            a = "ipad" == b.match(/ipad/i);
            var c = "iphone os" == b.match(/iphone os/i),
                l = "midp" == b.match(/midp/i),
                h = "rv:1.2.3.4" == b.match(/rv:1.2.3.4/i),
                q = "ucweb" == b.match(/ucweb/i),
                z = "android" == b.match(/android/i),
                C = "windows ce" == b.match(/windows ce/i);
            b = "windows mobile" == b.match(/windows mobile/i);
            y =
                a || c || l || h || q || z || C || b
                    ? y + ",'origin':'mobile'"
                    : y + ",'origin':'pc'";
        },
        languageKey: function (a) {
            "" ||
            (a.push(navigator.language),
                (y =
                    y +
                    ",'language':'" +
                    this.replaceAll(navigator.language, " ", "_") +
                    "'"));
            return a;
        },
        colorDepthKey: function (a) {
            "" ||
            (a.push(screen.colorDepth),
                (y = y + ",'colorDepth':'" + screen.colorDepth + "'"));
            return a;
        },
        screenResolutionKey: function (a) {
            if (!this.options.excludeScreenResolution) {
                var b = this.getScreenResolution();
                "undefined" !== typeof b &&
                (a.push(b.join("x")),
                    (y = y + ",'screenResolution':'" + b.join("x") + "'"));
            }
            return a;
        },
        getScreenResolution: function () {
            return this.options.detectScreenOrientation
                ? screen.height > screen.width
                    ? [screen.height, screen.width]
                    : [screen.width, screen.height]
                : [screen.height, screen.width];
        },
        timezoneOffsetKey: function (a) {
            this.options.excludeTimezoneOffset ||
            (a.push(new Date().getTimezoneOffset()),
                (y =
                    y +
                    ",'timezoneOffset':'" +
                    new Date().getTimezoneOffset() / 60 +
                    "'"));
            return a;
        },
        sessionStorageKey: function (a) {
            !this.options.excludeSessionStorage &&
            this.hasSessionStorage() &&
            (a.push("sessionStorageKey"), (y += ",'sessionStorage':true"));
            return a;
        },
        localStorageKey: function (a) {
            !this.options.excludeSessionStorage &&
            this.hasLocalStorage() &&
            (a.push("localStorageKey"), (y += ",'localStorage':true"));
            return a;
        },
        indexedDbKey: function (a) {
            !this.options.excludeIndexedDB &&
            this.hasIndexedDB() &&
            (a.push("indexedDbKey"), (y += ",'indexedDb':true"));
            return a;
        },
        addBehaviorKey: function (a) {
            document.body &&
            !this.options.excludeAddBehavior &&
            document.body.addBehavior
                ? (a.push("addBehaviorKey"), (y += ",'addBehavior':true"))
                : (y += ",'addBehavior':false");
            return a;
        },
        openDatabaseKey: function (a) {
            !this.options.excludeOpenDatabase && window.openDatabase
                ? (a.push("openDatabase"), (y += ",'openDatabase':true"))
                : (y += ",'openDatabase':false");
            return a;
        },
        cpuClassKey: function (a) {
            this.options.excludeCpuClass ||
            (a.push(this.getNavigatorCpuClass()),
                (y = y + ",'cpu':'" + this.getNavigatorCpuClass() + "'"));
            return a;
        },
        platformKey: function (a) {
            this.options.excludePlatform ||
            (a.push(this.getNavigatorPlatform()),
                (y = y + ",'platform':'" + this.getNavigatorPlatform() + "'"));
            return a;
        },
        hardwareConcurrencyKey: function (a) {
            var b = this.getHardwareConcurrency();
            a.push(b);
            y = y + ",'ccn':'" + b + "'";
            return a;
        },
        doNotTrackKey: function (a) {
            this.options.excludeDoNotTrack ||
            (a.push(this.getDoNotTrack()),
                (y = y + ",'track':'" + this.getDoNotTrack() + "'"));
            return a;
        },
        canvasKey: function (a) {
            if (!this.options.excludeCanvas && this.isCanvasSupported()) {
                var b = this.getCanvasFp();
                a.push(b);
                _jdfp_canvas_md5 = t(b);
                y = y + ",'canvas':'" + _jdfp_canvas_md5 + "'";
            }
            return a;
        },
        webglKey: function (a) {
            if (!this.options.excludeWebGL && this.isCanvasSupported()) {
                var b = this.getWebglFp();
                _jdfp_webgl_md5 = t(b);
                a.push(b);
                y = y + ",'webglFp':'" + _jdfp_webgl_md5 + "'";
            }
            return a;
        },
        pluginsKey: function (a) {
            this.isIE()
                ? (a.push(this.getIEPluginsString()),
                    (y = y + ",'plugins':'" + t(this.getIEPluginsString()) + "'"))
                : (a.push(this.getRegularPluginsString()),
                    (y = y + ",'plugins':'" + t(this.getRegularPluginsString()) + "'"));
            return a;
        },
        getRegularPluginsString: function () {
            return this.map(
                navigator.plugins,
                function (a) {
                    var b = this.map(a, function (c) {
                        return [c.type, c.suffixes].join("~");
                    }).join(",");
                    return [a.name, a.description, b].join("::");
                },
                this
            ).join(";");
        },
        getIEPluginsString: function () {
            return window.ActiveXObject
                ? this.map(
                    "AcroPDF.PDF;Adodb.Stream;AgControl.AgControl;DevalVRXCtrl.DevalVRXCtrl.1;MacromediaFlashPaper.MacromediaFlashPaper;Msxml2.DOMDocument;Msxml2.XMLHTTP;PDF.PdfCtrl;QuickTime.QuickTime;QuickTimeCheckObject.QuickTimeCheck.1;RealPlayer;RealPlayer.RealPlayer(tm) ActiveX Control (32-bit);RealVideo.RealVideo(tm) ActiveX Control (32-bit);Scripting.Dictionary;SWCtl.SWCtl;Shell.UIHelper;ShockwaveFlash.ShockwaveFlash;Skype.Detection;TDCCtl.TDCCtl;WMPlayer.OCX;rmocx.RealPlayer G2 Control;rmocx.RealPlayer G2 Control.1".split(
                        ";"
                    ),
                    function (a) {
                        try {
                            return new ActiveXObject(a), a;
                        } catch (b) {
                            return null;
                        }
                    }
                ).join(";")
                : "";
        },
        hasSessionStorage: function () {
            try {
                return !!window.sessionStorage;
            } catch (a) {
                return !0;
            }
        },
        hasLocalStorage: function () {
            try {
                return !!window.localStorage;
            } catch (a) {
                return !0;
            }
        },
        hasIndexedDB: function () {
            return true;
            return !!window.indexedDB;
        },
        getNavigatorCpuClass: function () {
            return navigator.cpuClass ? navigator.cpuClass : "NA";
        },
        getNavigatorPlatform: function () {
            return navigator.platform ? navigator.platform : "NA";
        },
        getHardwareConcurrency: function () {
            return navigator.hardwareConcurrency
                ? navigator.hardwareConcurrency
                : "NA";
        },
        getDoNotTrack: function () {
            return navigator.doNotTrack ? navigator.doNotTrack : "NA";
        },
        getCanvasFp: function () {
            return "";
            var a = navigator.userAgent.toLowerCase();
            if (
                (0 < a.indexOf("jdjr-app") || 0 <= a.indexOf("jdapp")) &&
                (0 < a.indexOf("iphone") || 0 < a.indexOf("ipad"))
            )
                return null;
            a = document.createElement("canvas");
            var b = a.getContext("2d");
            b.fillStyle = "red";
            b.fillRect(30, 10, 200, 100);
            b.strokeStyle = "#1a3bc1";
            b.lineWidth = 6;
            b.lineCap = "round";
            b.arc(50, 50, 20, 0, Math.PI, !1);
            b.stroke();
            b.fillStyle = "#42e1a2";
            b.font = "15.4px 'Arial'";
            b.textBaseline = "alphabetic";
            b.fillText("PR flacks quiz gym: TV DJ box when? \u2620", 15, 60);
            b.shadowOffsetX = 1;
            b.shadowOffsetY = 2;
            b.shadowColor = "white";
            b.fillStyle = "rgba(0, 0, 200, 0.5)";
            b.font = "60px 'Not a real font'";
            b.fillText("No\u9a97", 40, 80);
            return a.toDataURL();
        },
        getWebglFp: function () {
            var a = navigator.userAgent;
            a = a.toLowerCase();
            if (
                (0 < a.indexOf("jdjr-app") || 0 <= a.indexOf("jdapp")) &&
                (0 < a.indexOf("iphone") || 0 < a.indexOf("ipad"))
            )
                return null;
            a = function (D) {
                b.clearColor(0, 0, 0, 1);
                b.enable(b.DEPTH_TEST);
                b.depthFunc(b.LEQUAL);
                b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT);
                return "[" + D[0] + ", " + D[1] + "]";
            };
            var b = this.getWebglCanvas();
            if (!b) return null;
            var c = [],
                l = b.createBuffer();
            b.bindBuffer(b.ARRAY_BUFFER, l);
            var h = new Float32Array([
                -0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0,
            ]);
            b.bufferData(b.ARRAY_BUFFER, h, b.STATIC_DRAW);
            l.itemSize = 3;
            l.numItems = 3;
            h = b.createProgram();
            var q = b.createShader(b.VERTEX_SHADER);
            b.shaderSource(
                q,
                "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"
            );
            b.compileShader(q);
            var z = b.createShader(b.FRAGMENT_SHADER);
            b.shaderSource(
                z,
                "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"
            );
            b.compileShader(z);
            b.attachShader(h, q);
            b.attachShader(h, z);
            b.linkProgram(h);
            b.useProgram(h);
            h.vertexPosAttrib = b.getAttribLocation(h, "attrVertex");
            h.offsetUniform = b.getUniformLocation(h, "uniformOffset");
            b.enableVertexAttribArray(h.vertexPosArray);
            b.vertexAttribPointer(h.vertexPosAttrib, l.itemSize, b.FLOAT, !1, 0, 0);
            b.uniform2f(h.offsetUniform, 1, 1);
            b.drawArrays(b.TRIANGLE_STRIP, 0, l.numItems);
            null != b.canvas && c.push(b.canvas.toDataURL());
            c.push("extensions:" + b.getSupportedExtensions().join(";"));
            c.push("extensions:" + b.getSupportedExtensions().join(";"));
            c.push("w1" + a(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE)));
            c.push("w2" + a(b.getParameter(b.ALIASED_POINT_SIZE_RANGE)));
            c.push("w3" + b.getParameter(b.ALPHA_BITS));
            c.push("w4" + (b.getContextAttributes().antialias ? "yes" : "no"));
            c.push("w5" + b.getParameter(b.BLUE_BITS));
            c.push("w6" + b.getParameter(b.DEPTH_BITS));
            c.push("w7" + b.getParameter(b.GREEN_BITS));
            c.push(
                "w8" +
                (function (D) {
                    var B,
                        F =
                            D.getExtension("EXT_texture_filter_anisotropic") ||
                            D.getExtension("WEBKIT_EXT_texture_filter_anisotropic") ||
                            D.getExtension("MOZ_EXT_texture_filter_anisotropic");
                    return F
                        ? ((B = D.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)),
                        0 === B && (B = 2),
                            B)
                        : null;
                })(b)
            );
            c.push("w9" + b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
            c.push("w10" + b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE));
            c.push("w11" + b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS));
            c.push("w12" + b.getParameter(b.MAX_RENDERBUFFER_SIZE));
            c.push("w13" + b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS));
            c.push("w14" + b.getParameter(b.MAX_TEXTURE_SIZE));
            c.push("w15" + b.getParameter(b.MAX_VARYING_VECTORS));
            c.push("w16" + b.getParameter(b.MAX_VERTEX_ATTRIBS));
            c.push("w17" + b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
            c.push("w18" + b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS));
            c.push("w19" + a(b.getParameter(b.MAX_VIEWPORT_DIMS)));
            c.push("w20" + b.getParameter(b.RED_BITS));
            c.push("w21" + b.getParameter(b.RENDERER));
            c.push("w22" + b.getParameter(b.SHADING_LANGUAGE_VERSION));
            c.push("w23" + b.getParameter(b.STENCIL_BITS));
            c.push("w24" + b.getParameter(b.VENDOR));
            c.push("w25" + b.getParameter(b.VERSION));
            try {
                var C = b.getExtension("WEBGL_debug_renderer_info");
                C &&
                (c.push("wuv:" + b.getParameter(C.UNMASKED_VENDOR_WEBGL)),
                    c.push("wur:" + b.getParameter(C.UNMASKED_RENDERER_WEBGL)));
            } catch (D) {}
            return c.join("\u00a7");
        },
        isCanvasSupported: function () {
            return true;
            var a = document.createElement("canvas");
            return !(!a.getContext || !a.getContext("2d"));
        },
        isIE: function () {
            return "Microsoft Internet Explorer" === navigator.appName ||
            ("Netscape" === navigator.appName &&
                /Trident/.test(navigator.userAgent))
                ? !0
                : !1;
        },
        getWebglCanvas: function () {
            return null;
            var a = document.createElement("canvas"),
                b = null;
            try {
                var c = navigator.userAgent;
                c = c.toLowerCase();
                ((0 < c.indexOf("jdjr-app") || 0 <= c.indexOf("jdapp")) &&
                    (0 < c.indexOf("iphone") || 0 < c.indexOf("ipad"))) ||
                (b = a.getContext("webgl") || a.getContext("experimental-webgl"));
            } catch (l) {}
            b || (b = null);
            return b;
        },
        each: function (a, b, c) {
            if (null !== a)
                if (this.nativeForEach && a.forEach === this.nativeForEach)
                    a.forEach(b, c);
                else if (a.length === +a.length)
                    for (
                        var l = 0, h = a.length;
                        l < h && b.call(c, a[l], l, a) !== {};
                        l++
                    );
                else
                    for (l in a)
                        if (a.hasOwnProperty(l) && b.call(c, a[l], l, a) === {}) break;
        },
        map: function (a, b, c) {
            var l = [];
            if (null == a) return l;
            if (this.nativeMap && a.map === this.nativeMap) return a.map(b, c);
            this.each(a, function (h, q, z) {
                l[l.length] = b.call(c, h, q, z);
            });
            return l;
        },
        x64Add: function (a, b) {
            a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
            b = [b[0] >>> 16, b[0] & 65535, b[1] >>> 16, b[1] & 65535];
            var c = [0, 0, 0, 0];
            c[3] += a[3] + b[3];
            c[2] += c[3] >>> 16;
            c[3] &= 65535;
            c[2] += a[2] + b[2];
            c[1] += c[2] >>> 16;
            c[2] &= 65535;
            c[1] += a[1] + b[1];
            c[0] += c[1] >>> 16;
            c[1] &= 65535;
            c[0] += a[0] + b[0];
            c[0] &= 65535;
            return [(c[0] << 16) | c[1], (c[2] << 16) | c[3]];
        },
        x64Multiply: function (a, b) {
            a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
            b = [b[0] >>> 16, b[0] & 65535, b[1] >>> 16, b[1] & 65535];
            var c = [0, 0, 0, 0];
            c[3] += a[3] * b[3];
            c[2] += c[3] >>> 16;
            c[3] &= 65535;
            c[2] += a[2] * b[3];
            c[1] += c[2] >>> 16;
            c[2] &= 65535;
            c[2] += a[3] * b[2];
            c[1] += c[2] >>> 16;
            c[2] &= 65535;
            c[1] += a[1] * b[3];
            c[0] += c[1] >>> 16;
            c[1] &= 65535;
            c[1] += a[2] * b[2];
            c[0] += c[1] >>> 16;
            c[1] &= 65535;
            c[1] += a[3] * b[1];
            c[0] += c[1] >>> 16;
            c[1] &= 65535;
            c[0] += a[0] * b[3] + a[1] * b[2] + a[2] * b[1] + a[3] * b[0];
            c[0] &= 65535;
            return [(c[0] << 16) | c[1], (c[2] << 16) | c[3]];
        },
        x64Rotl: function (a, b) {
            b %= 64;
            if (32 === b) return [a[1], a[0]];
            if (32 > b)
                return [
                    (a[0] << b) | (a[1] >>> (32 - b)),
                    (a[1] << b) | (a[0] >>> (32 - b)),
                ];
            b -= 32;
            return [
                (a[1] << b) | (a[0] >>> (32 - b)),
                (a[0] << b) | (a[1] >>> (32 - b)),
            ];
        },
        x64LeftShift: function (a, b) {
            b %= 64;
            return 0 === b
                ? a
                : 32 > b
                    ? [(a[0] << b) | (a[1] >>> (32 - b)), a[1] << b]
                    : [a[1] << (b - 32), 0];
        },
        x64Xor: function (a, b) {
            return [a[0] ^ b[0], a[1] ^ b[1]];
        },
        x64Fmix: function (a) {
            a = this.x64Xor(a, [0, a[0] >>> 1]);
            a = this.x64Multiply(a, [4283543511, 3981806797]);
            a = this.x64Xor(a, [0, a[0] >>> 1]);
            a = this.x64Multiply(a, [3301882366, 444984403]);
            return (a = this.x64Xor(a, [0, a[0] >>> 1]));
        },
        x64hash128: function (a, b) {
            a = a || "";
            b = b || 0;
            var c = a.length % 16,
                l = a.length - c,
                h = [0, b];
            b = [0, b];
            for (
                var q,
                    z,
                    C = [2277735313, 289559509],
                    D = [1291169091, 658871167],
                    B = 0;
                B < l;
                B += 16
            )
                (q = [
                    (a.charCodeAt(B + 4) & 255) |
                    ((a.charCodeAt(B + 5) & 255) << 8) |
                    ((a.charCodeAt(B + 6) & 255) << 16) |
                    ((a.charCodeAt(B + 7) & 255) << 24),
                    (a.charCodeAt(B) & 255) |
                    ((a.charCodeAt(B + 1) & 255) << 8) |
                    ((a.charCodeAt(B + 2) & 255) << 16) |
                    ((a.charCodeAt(B + 3) & 255) << 24),
                ]),
                    (z = [
                        (a.charCodeAt(B + 12) & 255) |
                        ((a.charCodeAt(B + 13) & 255) << 8) |
                        ((a.charCodeAt(B + 14) & 255) << 16) |
                        ((a.charCodeAt(B + 15) & 255) << 24),
                        (a.charCodeAt(B + 8) & 255) |
                        ((a.charCodeAt(B + 9) & 255) << 8) |
                        ((a.charCodeAt(B + 10) & 255) << 16) |
                        ((a.charCodeAt(B + 11) & 255) << 24),
                    ]),
                    (q = this.x64Multiply(q, C)),
                    (q = this.x64Rotl(q, 31)),
                    (q = this.x64Multiply(q, D)),
                    (h = this.x64Xor(h, q)),
                    (h = this.x64Rotl(h, 27)),
                    (h = this.x64Add(h, b)),
                    (h = this.x64Add(this.x64Multiply(h, [0, 5]), [0, 1390208809])),
                    (z = this.x64Multiply(z, D)),
                    (z = this.x64Rotl(z, 33)),
                    (z = this.x64Multiply(z, C)),
                    (b = this.x64Xor(b, z)),
                    (b = this.x64Rotl(b, 31)),
                    (b = this.x64Add(b, h)),
                    (b = this.x64Add(this.x64Multiply(b, [0, 5]), [0, 944331445]));
            q = [0, 0];
            z = [0, 0];
            switch (c) {
                case 15:
                    z = this.x64Xor(z, this.x64LeftShift([0, a.charCodeAt(B + 14)], 48));
                case 14:
                    z = this.x64Xor(z, this.x64LeftShift([0, a.charCodeAt(B + 13)], 40));
                case 13:
                    z = this.x64Xor(z, this.x64LeftShift([0, a.charCodeAt(B + 12)], 32));
                case 12:
                    z = this.x64Xor(z, this.x64LeftShift([0, a.charCodeAt(B + 11)], 24));
                case 11:
                    z = this.x64Xor(z, this.x64LeftShift([0, a.charCodeAt(B + 10)], 16));
                case 10:
                    z = this.x64Xor(z, this.x64LeftShift([0, a.charCodeAt(B + 9)], 8));
                case 9:
                    (z = this.x64Xor(z, [0, a.charCodeAt(B + 8)])),
                        (z = this.x64Multiply(z, D)),
                        (z = this.x64Rotl(z, 33)),
                        (z = this.x64Multiply(z, C)),
                        (b = this.x64Xor(b, z));
                case 8:
                    q = this.x64Xor(q, this.x64LeftShift([0, a.charCodeAt(B + 7)], 56));
                case 7:
                    q = this.x64Xor(q, this.x64LeftShift([0, a.charCodeAt(B + 6)], 48));
                case 6:
                    q = this.x64Xor(q, this.x64LeftShift([0, a.charCodeAt(B + 5)], 40));
                case 5:
                    q = this.x64Xor(q, this.x64LeftShift([0, a.charCodeAt(B + 4)], 32));
                case 4:
                    q = this.x64Xor(q, this.x64LeftShift([0, a.charCodeAt(B + 3)], 24));
                case 3:
                    q = this.x64Xor(q, this.x64LeftShift([0, a.charCodeAt(B + 2)], 16));
                case 2:
                    q = this.x64Xor(q, this.x64LeftShift([0, a.charCodeAt(B + 1)], 8));
                case 1:
                    (q = this.x64Xor(q, [0, a.charCodeAt(B)])),
                        (q = this.x64Multiply(q, C)),
                        (q = this.x64Rotl(q, 31)),
                        (q = this.x64Multiply(q, D)),
                        (h = this.x64Xor(h, q));
            }
            h = this.x64Xor(h, [0, a.length]);
            b = this.x64Xor(b, [0, a.length]);
            h = this.x64Add(h, b);
            b = this.x64Add(b, h);
            h = this.x64Fmix(h);
            b = this.x64Fmix(b);
            h = this.x64Add(h, b);
            b = this.x64Add(b, h);
            return (
                ("00000000" + (h[0] >>> 0).toString(16)).slice(-8) +
                ("00000000" + (h[1] >>> 0).toString(16)).slice(-8) +
                ("00000000" + (b[0] >>> 0).toString(16)).slice(-8) +
                ("00000000" + (b[1] >>> 0).toString(16)).slice(-8)
            );
        },
    };
}

var JDDSecCryptoJS =
    JDDSecCryptoJS ||
    (function (t, u) {
        var v = {},
            x = (v.lib = {}),
            w = (x.Base = (function () {
                function g() {}

                return {
                    extend: function (m) {
                        g.prototype = this;
                        var a = new g();
                        m && a.mixIn(m);
                        a.hasOwnProperty("init") ||
                        (a.init = function () {
                            a.$super.init.apply(this, arguments);
                        });
                        a.init.prototype = a;
                        a.$super = this;
                        return a;
                    },
                    create: function () {
                        var m = this.extend();
                        m.init.apply(m, arguments);
                        return m;
                    },
                    init: function () {},
                    mixIn: function (m) {
                        for (var a in m) m.hasOwnProperty(a) && (this[a] = m[a]);
                        m.hasOwnProperty("toString") && (this.toString = m.toString);
                    },
                    clone: function () {
                        return this.init.prototype.extend(this);
                    },
                };
            })()),
            A = (x.WordArray = w.extend({
                init: function (g, m) {
                    g = this.words = g || [];
                    this.sigBytes = m != u ? m : 4 * g.length;
                },
                toString: function (g) {
                    return (g || n).stringify(this);
                },
                concat: function (g) {
                    var m = this.words,
                        a = g.words,
                        b = this.sigBytes;
                    g = g.sigBytes;
                    this.clamp();
                    if (b % 4)
                        for (var c = 0; c < g; c++)
                            m[(b + c) >>> 2] |=
                                ((a[c >>> 2] >>> (24 - (c % 4) * 8)) & 255) <<
                                (24 - ((b + c) % 4) * 8);
                    else if (65535 < a.length)
                        for (c = 0; c < g; c += 4) m[(b + c) >>> 2] = a[c >>> 2];
                    else m.push.apply(m, a);
                    this.sigBytes += g;
                    return this;
                },
                clamp: function () {
                    var g = this.words,
                        m = this.sigBytes;
                    g[m >>> 2] &= 4294967295 << (32 - (m % 4) * 8);
                    g.length = t.ceil(m / 4);
                },
                clone: function () {
                    var g = w.clone.call(this);
                    g.words = this.words.slice(0);
                    return g;
                },
                random: function (g) {
                    for (var m = [], a = 0; a < g; a += 4)
                        m.push((4294967296 * t.random()) | 0);
                    return new A.init(m, g);
                },
            }));
        x.UUID = w.extend({
            generateUuid: function () {
                for (
                    var g = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split(""),
                        m = 0,
                        a = g.length;
                    m < a;
                    m++
                )
                    switch (g[m]) {
                        case "x":
                            g[m] = t.floor(16 * t.random()).toString(16);
                            break;
                        case "y":
                            g[m] = (t.floor(4 * t.random()) + 8).toString(16);
                    }
                return g.join("");
            },
        });
        var y = (v.enc = {}),
            n = (y.Hex = {
                stringify: function (g) {
                    var m = g.words;
                    g = g.sigBytes;
                    var a = [];
                    for (var b = 0; b < g; b++) {
                        var c = (m[b >>> 2] >>> (24 - (b % 4) * 8)) & 255;
                        a.push((c >>> 4).toString(16));
                        a.push((c & 15).toString(16));
                    }
                    return a.join("");
                },
                parse: function (g) {
                    for (var m = g.length, a = [], b = 0; b < m; b += 2)
                        a[b >>> 3] |= parseInt(g.substr(b, 2), 16) << (24 - (b % 8) * 4);
                    return new A.init(a, m / 2);
                },
            }),
            e = (y.Latin1 = {
                stringify: function (g) {
                    var m = g.words;
                    g = g.sigBytes;
                    for (var a = [], b = 0; b < g; b++)
                        a.push(
                            String.fromCharCode((m[b >>> 2] >>> (24 - (b % 4) * 8)) & 255)
                        );
                    return a.join("");
                },
                parse: function (g) {
                    for (var m = g.length, a = [], b = 0; b < m; b++)
                        a[b >>> 2] |= (g.charCodeAt(b) & 255) << (24 - (b % 4) * 8);
                    return new A.init(a, m);
                },
            }),
            f = (y.Utf8 = {
                stringify: function (g) {
                    try {
                        return decodeURIComponent(escape(e.stringify(g)));
                    } catch (m) {
                        throw Error("Malformed UTF-8 data");
                    }
                },
                parse: function (g) {
                    return e.parse(unescape(encodeURIComponent(g)));
                },
            }),
            r = (x.BufferedBlockAlgorithm = w.extend({
                reset: function () {
                    this._data = new A.init();
                    this._nDataBytes = 0;
                },
                _append: function (g) {
                    "string" == typeof g && (g = f.parse(g));
                    this._data.concat(g);
                    this._nDataBytes += g.sigBytes;
                },
                _process: function (g) {
                    var m = this._data,
                        a = m.words,
                        b = m.sigBytes,
                        c = this.blockSize,
                        l = b / (4 * c);
                    l = g ? t.ceil(l) : t.max((l | 0) - this._minBufferSize, 0);
                    g = l * c;
                    b = t.min(4 * g, b);
                    if (g) {
                        for (var h = 0; h < g; h += c) this._doProcessBlock(a, h);
                        h = a.splice(0, g);
                        m.sigBytes -= b;
                    }
                    return new A.init(h, b);
                },
                clone: function () {
                    var g = w.clone.call(this);
                    g._data = this._data.clone();
                    return g;
                },
                _minBufferSize: 0,
            }));
        x.Hasher = r.extend({
            cfg: w.extend(),
            init: function (g) {
                this.cfg = this.cfg.extend(g);
                this.reset();
            },
            reset: function () {
                r.reset.call(this);
                this._doReset();
            },
            update: function (g) {
                this._append(g);
                this._process();
                return this;
            },
            finalize: function (g) {
                g && this._append(g);
                return this._doFinalize();
            },
            blockSize: 16,
            _createHelper: function (g) {
                return function (m, a) {
                    return new g.init(a).finalize(m);
                };
            },
            _createHmacHelper: function (g) {
                return function (m, a) {
                    return new k.HMAC.init(g, a).finalize(m);
                };
            },
        });
        var k = (v.algo = {});
        v.channel = {};
        return v;
    })(Math);
JDDSecCryptoJS.lib.Cipher ||
(function (t) {
    var u = JDDSecCryptoJS,
        v = u.lib,
        x = v.Base,
        w = v.WordArray,
        A = v.BufferedBlockAlgorithm,
        y = (v.Cipher = A.extend({
            cfg: x.extend(),
            createEncryptor: function (g, m) {
                return this.create(this._ENC_XFORM_MODE, g, m);
            },
            createDecryptor: function (g, m) {
                return this.create(this._DEC_XFORM_MODE, g, m);
            },
            init: function (g, m, a) {
                this.cfg = this.cfg.extend(a);
                this._xformMode = g;
                this._key = m;
                this.reset();
            },
            reset: function () {
                A.reset.call(this);
                this._doReset();
            },
            process: function (g) {
                this._append(g);
                return this._process();
            },
            finalize: function (g) {
                g && this._append(g);
                return this._doFinalize();
            },
            keySize: 4,
            ivSize: 4,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            _createHelper: (function () {
                function g(m) {
                    if ("string" != typeof m) return k;
                }

                return function (m) {
                    return {
                        encrypt: function (a, b, c) {
                            return g(b).encrypt(m, a, b, c);
                        },
                        decrypt: function (a, b, c) {
                            return g(b).decrypt(m, a, b, c);
                        },
                    };
                };
            })(),
        }));
    v.StreamCipher = y.extend({
        _doFinalize: function () {
            return this._process(!0);
        },
        blockSize: 1,
    });
    var n = (u.mode = {}),
        e = (v.BlockCipherMode = x.extend({
            createEncryptor: function (g, m) {
                return this.Encryptor.create(g, m);
            },
            createDecryptor: function (g, m) {
                return this.Decryptor.create(g, m);
            },
            init: function (g, m) {
                this._cipher = g;
                this._iv = m;
            },
        }));
    n = n.CBC = (function () {
        function g(a, b, c) {
            var l = this._iv;
            l ? (this._iv = t) : (l = this._prevBlock);
            for (var h = 0; h < c; h++) a[b + h] ^= l[h];
        }

        var m = e.extend();
        m.Encryptor = m.extend({
            processBlock: function (a, b) {
                var c = this._cipher,
                    l = c.blockSize;
                g.call(this, a, b, l);
                c.encryptBlock(a, b);
                this._prevBlock = a.slice(b, b + l);
            },
        });
        m.Decryptor = m.extend({
            processBlock: function (a, b) {
                var c = this._cipher,
                    l = c.blockSize,
                    h = a.slice(b, b + l);
                c.decryptBlock(a, b);
                g.call(this, a, b, l);
                this._prevBlock = h;
            },
        });
        return m;
    })();
    var f = ((u.pad = {}).Pkcs7 = {
        pad: function (g, m) {
            m *= 4;
            m -= g.sigBytes % m;
            for (
                var a = (m << 24) | (m << 16) | (m << 8) | m, b = [], c = 0;
                c < m;
                c += 4
            )
                b.push(a);
            m = w.create(b, m);
            g.concat(m);
        },
        unpad: function (g) {
            g.sigBytes -= g.words[(g.sigBytes - 1) >>> 2] & 255;
        },
    });
    v.BlockCipher = y.extend({
        cfg: y.cfg.extend({
            mode: n,
            padding: f,
        }),
        reset: function () {
            y.reset.call(this);
            var g = this.cfg,
                m = g.iv;
            g = g.mode;
            if (this._xformMode == this._ENC_XFORM_MODE) var a = g.createEncryptor;
            else (a = g.createDecryptor), (this._minBufferSize = 1);
            this._mode = a.call(g, this, m && m.words);
        },
        _doProcessBlock: function (g, m) {
            this._mode.processBlock(g, m);
        },
        _doFinalize: function () {
            var g = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
                g.pad(this._data, this.blockSize);
                var m = this._process(!0);
            } else (m = this._process(!0)), g.unpad(m);
            return m;
        },
        blockSize: 4,
    });
    var r = (v.CipherParams = x.extend({
        init: function (g) {
            this.mixIn(g);
        },
        toString: function (g) {
            return (g || this.formatter).stringify(this);
        },
    }));
    u.format = {};
    var k = (v.SerializableCipher = x.extend({
        cfg: x.extend({}),
        encrypt: function (g, m, a, b) {
            b = this.cfg.extend(b);
            var c = g.createEncryptor(a, b);
            m = c.finalize(m);
            c = c.cfg;
            return r.create({
                ciphertext: m,
                key: a,
                iv: c.iv,
                algorithm: g,
                mode: c.mode,
                padding: c.padding,
                blockSize: g.blockSize,
                formatter: b.format,
            });
        },
        decrypt: function (g, m, a, b) {
            b = this.cfg.extend(b);
            m = this._parse(m, b.format);
            return g.createDecryptor(a, b).finalize(m.ciphertext);
        },
        _parse: function (g, m) {
            return "string" == typeof g ? m.parse(g, this) : g;
        },
    }));
})();
(function () {
    var t = JDDSecCryptoJS,
        u = t.lib.BlockCipher,
        v = t.algo,
        x = [],
        w = [],
        A = [],
        y = [],
        n = [],
        e = [],
        f = [],
        r = [],
        k = [],
        g = [];
    (function () {
        for (var a = [], b = 0; 256 > b; b++)
            a[b] = 128 > b ? b << 1 : (b << 1) ^ 283;
        var c = 0,
            l = 0;
        for (b = 0; 256 > b; b++) {
            var h = l ^ (l << 1) ^ (l << 2) ^ (l << 3) ^ (l << 4);
            h = (h >>> 8) ^ (h & 255) ^ 99;
            x[c] = h;
            w[h] = c;
            var q = a[c],
                z = a[q],
                C = a[z],
                D = (257 * a[h]) ^ (16843008 * h);
            A[c] = (D << 24) | (D >>> 8);
            y[c] = (D << 16) | (D >>> 16);
            n[c] = (D << 8) | (D >>> 24);
            e[c] = D;
            D = (16843009 * C) ^ (65537 * z) ^ (257 * q) ^ (16843008 * c);
            f[h] = (D << 24) | (D >>> 8);
            r[h] = (D << 16) | (D >>> 16);
            k[h] = (D << 8) | (D >>> 24);
            g[h] = D;
            c ? ((c = q ^ a[a[a[C ^ q]]]), (l ^= a[a[l]])) : (c = l = 1);
        }
    })();
    var m = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
    v = v.AES = u.extend({
        _doReset: function () {
            var a = this._key,
                b = a.words,
                c = a.sigBytes / 4;
            a = 4 * ((this._nRounds = c + 6) + 1);
            for (var l = (this._keySchedule = []), h = 0; h < a; h++)
                if (h < c) l[h] = b[h];
                else {
                    var q = l[h - 1];
                    h % c
                        ? 6 < c &&
                        4 == h % c &&
                        (q =
                            (x[q >>> 24] << 24) |
                            (x[(q >>> 16) & 255] << 16) |
                            (x[(q >>> 8) & 255] << 8) |
                            x[q & 255])
                        : ((q = (q << 8) | (q >>> 24)),
                            (q =
                                (x[q >>> 24] << 24) |
                                (x[(q >>> 16) & 255] << 16) |
                                (x[(q >>> 8) & 255] << 8) |
                                x[q & 255]),
                            (q ^= m[(h / c) | 0] << 24));
                    l[h] = l[h - c] ^ q;
                }
            b = this._invKeySchedule = [];
            for (c = 0; c < a; c++)
                (h = a - c),
                    (q = c % 4 ? l[h] : l[h - 4]),
                    (b[c] =
                        4 > c || 4 >= h
                            ? q
                            : f[x[q >>> 24]] ^
                            r[x[(q >>> 16) & 255]] ^
                            k[x[(q >>> 8) & 255]] ^
                            g[x[q & 255]]);
        },
        encryptBlock: function (a, b) {
            this._doCryptBlock(a, b, this._keySchedule, A, y, n, e, x);
        },
        decryptBlock: function (a, b) {
            var c = a[b + 1];
            a[b + 1] = a[b + 3];
            a[b + 3] = c;
            this._doCryptBlock(a, b, this._invKeySchedule, f, r, k, g, w);
            c = a[b + 1];
            a[b + 1] = a[b + 3];
            a[b + 3] = c;
        },
        _doCryptBlock: function (a, b, c, l, h, q, z, C) {
            for (
                var D = this._nRounds,
                    B = a[b] ^ c[0],
                    F = a[b + 1] ^ c[1],
                    H = a[b + 2] ^ c[2],
                    G = a[b + 3] ^ c[3],
                    I = 4,
                    M = 1;
                M < D;
                M++
            ) {
                var J =
                    l[B >>> 24] ^
                    h[(F >>> 16) & 255] ^
                    q[(H >>> 8) & 255] ^
                    z[G & 255] ^
                    c[I++],
                    K =
                        l[F >>> 24] ^
                        h[(H >>> 16) & 255] ^
                        q[(G >>> 8) & 255] ^
                        z[B & 255] ^
                        c[I++],
                    L =
                        l[H >>> 24] ^
                        h[(G >>> 16) & 255] ^
                        q[(B >>> 8) & 255] ^
                        z[F & 255] ^
                        c[I++];
                G =
                    l[G >>> 24] ^
                    h[(B >>> 16) & 255] ^
                    q[(F >>> 8) & 255] ^
                    z[H & 255] ^
                    c[I++];
                B = J;
                F = K;
                H = L;
            }
            J =
                ((C[B >>> 24] << 24) |
                    (C[(F >>> 16) & 255] << 16) |
                    (C[(H >>> 8) & 255] << 8) |
                    C[G & 255]) ^
                c[I++];
            K =
                ((C[F >>> 24] << 24) |
                    (C[(H >>> 16) & 255] << 16) |
                    (C[(G >>> 8) & 255] << 8) |
                    C[B & 255]) ^
                c[I++];
            L =
                ((C[H >>> 24] << 24) |
                    (C[(G >>> 16) & 255] << 16) |
                    (C[(B >>> 8) & 255] << 8) |
                    C[F & 255]) ^
                c[I++];
            G =
                ((C[G >>> 24] << 24) |
                    (C[(B >>> 16) & 255] << 16) |
                    (C[(F >>> 8) & 255] << 8) |
                    C[H & 255]) ^
                c[I++];
            a[b] = J;
            a[b + 1] = K;
            a[b + 2] = L;
            a[b + 3] = G;
        },
        keySize: 8,
    });
    t.AES = u._createHelper(v);
})();

(function () {
    var t = JDDSecCryptoJS,
        u = t.lib,
        v = u.WordArray,
        x = u.Hasher,
        w = [];
    u = t.algo.SHA1 = x.extend({
        _doReset: function () {
            this._hash = new v.init([
                1732584193, 4023233417, 2562383102, 271733878, 3285377520,
            ]);
        },
        _doProcessBlock: function (A, y) {
            for (
                var n = this._hash.words,
                    e = n[0],
                    f = n[1],
                    r = n[2],
                    k = n[3],
                    g = n[4],
                    m = 0;
                80 > m;
                m++
            ) {
                if (16 > m) w[m] = A[y + m] | 0;
                else {
                    var a = w[m - 3] ^ w[m - 8] ^ w[m - 14] ^ w[m - 16];
                    w[m] = (a << 1) | (a >>> 31);
                }
                a = ((e << 5) | (e >>> 27)) + g + w[m];
                a =
                    20 > m
                        ? a + (((f & r) | (~f & k)) + 1518500249)
                        : 40 > m
                        ? a + ((f ^ r ^ k) + 1859775393)
                        : 60 > m
                            ? a + (((f & r) | (f & k) | (r & k)) - 1894007588)
                            : a + ((f ^ r ^ k) - 899497514);
                g = k;
                k = r;
                r = (f << 30) | (f >>> 2);
                f = e;
                e = a;
            }
            n[0] = (n[0] + e) | 0;
            n[1] = (n[1] + f) | 0;
            n[2] = (n[2] + r) | 0;
            n[3] = (n[3] + k) | 0;
            n[4] = (n[4] + g) | 0;
        },
        _doFinalize: function () {
            var A = this._data,
                y = A.words,
                n = 8 * this._nDataBytes,
                e = 8 * A.sigBytes;
            y[e >>> 5] |= 128 << (24 - (e % 32));
            y[(((e + 64) >>> 9) << 4) + 14] = Math.floor(n / 4294967296);
            y[(((e + 64) >>> 9) << 4) + 15] = n;
            A.sigBytes = 4 * y.length;
            this._process();
            return this._hash;
        },
        clone: function () {
            var A = x.clone.call(this);
            A._hash = this._hash.clone();
            return A;
        },
    });
    t.SHA1 = x._createHelper(u);
    t.HmacSHA1 = x._createHmacHelper(u);
})();

(function () {
    var t = JDDSecCryptoJS,
        u = t.channel;
    u.Downlink = {
        deBase32: function (v) {
            if (void 0 == v || "" == v || null == v) return "";
            var x = t.enc.Hex.parse("30313233343536373839616263646566"),
                w = t.enc.Hex.parse("724e5428476f307361374d3233784a6c");
            return t.AES.decrypt(
                {
                    ciphertext: t.enc.Base32.parse(v),
                },
                w,
                {
                    mode: t.mode.CBC,
                    padding: t.pad.Pkcs7,
                    iv: x,
                }
            ).toString(t.enc.Utf8);
        },
        deBase64: function (v) {
            return "";
        },
    };
    u.Uplink = {
        enAsBase32: function (v) {
            return "";
        },
        enAsBase64: function (v) {
            return "";
        },
    };
})();

(function () {
    var t = JDDSecCryptoJS,
        u = t.lib.WordArray;
    t.enc.Base32 = {
        stringify: function (v) {
            var x = v.words,
                w = v.sigBytes,
                A = this._map;
            v.clamp();
            v = [];
            for (var y = 0; y < w; y += 5) {
                for (var n = [], e = 0; 5 > e; e++)
                    n[e] = (x[(y + e) >>> 2] >>> (24 - ((y + e) % 4) * 8)) & 255;
                n = [
                    (n[0] >>> 3) & 31,
                    ((n[0] & 7) << 2) | ((n[1] >>> 6) & 3),
                    (n[1] >>> 1) & 31,
                    ((n[1] & 1) << 4) | ((n[2] >>> 4) & 15),
                    ((n[2] & 15) << 1) | ((n[3] >>> 7) & 1),
                    (n[3] >>> 2) & 31,
                    ((n[3] & 3) << 3) | ((n[4] >>> 5) & 7),
                    n[4] & 31,
                ];
                for (e = 0; 8 > e && y + 0.625 * e < w; e++) v.push(A.charAt(n[e]));
            }
            if ((x = A.charAt(32))) for (; v.length % 8; ) v.push(x);
            return v.join("");
        },
        parse: function (v) {
            var x = v.length,
                w = this._map,
                A = w.charAt(32);
            A && ((A = v.indexOf(A)), -1 != A && (x = A));
            A = [];
            for (var y = 0, n = 0; n < x; n++) {
                var e = n % 8;
                if (0 != e && 2 != e && 5 != e) {
                    var f = 255 & (w.indexOf(v.charAt(n - 1)) << (40 - 5 * e) % 8),
                        r = 255 & (w.indexOf(v.charAt(n)) >>> (5 * e - 3) % 8);
                    e =
                        e % 3 ? 0 : 255 & (w.indexOf(v.charAt(n - 2)) << (3 == e ? 6 : 7));
                    A[y >>> 2] |= (f | r | e) << (24 - (y % 4) * 8);
                    y++;
                }
            }
            return u.create(A, y);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    };
})();

class JDDMAC {
    static t() {
        return "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D"
            .split(" ")
            .map(function (v) {
                return parseInt(v, 16);
            });
    }

    mac(v) {
        for (var x = -1, w = 0, A = v.length; w < A; w++)
            x = (x >>> 8) ^ t[(x ^ v.charCodeAt(w)) & 255];
        return (x ^ -1) >>> 0;
    }
}

var _CurrentPageProtocol =
        "https:" == document.location.protocol ? "https://" : "http://",
    _JdJrTdRiskDomainName = window.__fp_domain || "gia.jd.com",
    _url_query_str = "",
    _root_domain = "",
    _CurrentPageUrl = (function () {
        var t = document.location.href.toString();
        try {
            _root_domain =
                /^https?:\/\/(?:\w+\.)*?(\w*\.(?:com\.cn|cn|com|net|id))[\\\/]*/.exec(
                    t
                )[1];
        } catch (v) {}
        var u = t.indexOf("?");
        0 < u &&
        ((_url_query_str = t.substring(u + 1)),
        500 < _url_query_str.length &&
        (_url_query_str = _url_query_str.substring(0, 499)),
            (t = t.substring(0, u)));
        return (t = t.substring(_CurrentPageProtocol.length));
    })(),
    jd_shadow__ = (function () {
        try {
            var t = JDDSecCryptoJS,
                u = [];
            u.push(_CurrentPageUrl);
            var v = t.lib.UUID.generateUuid();
            u.push(v);
            var x = new Date().getTime();
            u.push(x);
            var w = t.SHA1(u.join("")).toString().toUpperCase();
            u = [];
            u.push("JD3");
            u.push(w);
            var A = new JDDMAC().mac(u.join(""));
            u.push(A);
            var y = t.enc.Hex.parse("30313233343536373839616263646566"),
                n = t.enc.Hex.parse("4c5751554935255042304e6458323365"),
                e = u.join("");
            return t.AES.encrypt(t.enc.Utf8.parse(e), n, {
                mode: t.mode.CBC,
                padding: t.pad.Pkcs7,
                iv: y,
            }).ciphertext.toString(t.enc.Base32);
        } catch (f) {
            console.log(f);
        }
    })();
var td_collect = new (function () {
    function t() {
        var n =
            window.webkitRTCPeerConnection ||
            window.mozRTCPeerConnection ||
            window.RTCPeerConnection;
        if (n) {
            var e = function (k) {
                    var g = /([0-9]{1,3}(\.[0-9]{1,3}){3})/,
                        m =
                            /\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*/;
                    try {
                        var a = g.exec(k);
                        if (null == a || 0 == a.length || void 0 == a) a = m.exec(k);
                        var b = a[1];
                        void 0 === f[b] && w.push(b);
                        f[b] = !0;
                    } catch (c) {}
                },
                f = {};
            try {
                var r = new n({
                    iceServers: [
                        {
                            url: "stun:stun.services.mozilla.com",
                        },
                    ],
                });
            } catch (k) {}
            try {
                void 0 === r &&
                (r = new n({
                    iceServers: [],
                }));
            } catch (k) {}
            if (r || window.mozRTCPeerConnection)
                try {
                    r.createDataChannel("chat", {
                        reliable: !1,
                    });
                } catch (k) {}
            r &&
            ((r.onicecandidate = function (k) {
                k.candidate && e(k.candidate.candidate);
            }),
                r.createOffer(
                    function (k) {
                        r.setLocalDescription(
                            k,
                            function () {},
                            function () {}
                        );
                    },
                    function () {}
                ),
                setTimeout(function () {
                    try {
                        r.localDescription.sdp.split("\n").forEach(function (k) {
                            0 === k.indexOf("a=candidate:") && e(k);
                        });
                    } catch (k) {}
                }, 800));
        }
    }

    function u(n) {
        var e;
        return (e = document.cookie.match(
            new RegExp("(^| )" + n + "=([^;]*)(;|$)")
        ))
            ? e[2]
            : "";
    }

    function v() {
        function n(g) {
            var m = {};
            r.style.fontFamily = g;
            document.body.appendChild(r);
            m.height = r.offsetHeight;
            m.width = r.offsetWidth;
            document.body.removeChild(r);
            return m;
        }

        var e = ["monospace", "sans-serif", "serif"],
            f = [],
            r = document.createElement("span");
        r.style.fontSize = "72px";
        r.style.visibility = "hidden";
        r.innerHTML = "mmmmmmmmmmlli";
        for (var k = 0; k < e.length; k++) f[k] = n(e[k]);
        this.checkSupportFont = function (g) {
            for (var m = 0; m < f.length; m++) {
                var a = n(g + "," + e[m]),
                    b = f[m];
                if (a.height !== b.height || a.width !== b.width) return !0;
            }
            return !1;
        };
    }

    function x(n) {
        var e = {};
        e.name = n.name;
        e.filename = n.filename.toLowerCase();
        e.description = n.description;
        void 0 !== n.version && (e.version = n.version);
        e.mimeTypes = [];
        for (var f = 0; f < n.length; f++) {
            var r = n[f],
                k = {};
            k.description = r.description;
            k.suffixes = r.suffixes;
            k.type = r.type;
            e.mimeTypes.push(k);
        }
        return e;
    }

    this.bizId = "";
    this.bioConfig = {
        type: "42",
        operation: 1,
        duraTime: 2,
        interval: 50,
    };
    this.worder = null;
    this.deviceInfo = {
        userAgent: "",
        isJdApp: !1,
        isJrApp: !1,
        sdkToken: "",
        fp: "",
        eid: "",
    };
    this.isRpTok = !1;
    this.obtainLocal = function (n) {
        n = "undefined" !== typeof n && n ? !0 : !1;
        var e = {};
        try {
            var f = document.cookie.replace(
                /(?:(?:^|.*;\s*)3AB9D23F7A4B3C9B\s*=\s*([^;]*).*$)|^.*$/,
                "$1"
            );
            0 !== f.length && (e.cookie = f);
        } catch (k) {}
        try {
            window.localStorage &&
            null !== window.localStorage &&
            0 !== window.localStorage.length &&
            (e.localStorage = window.localStorage.getItem("3AB9D23F7A4B3C9B"));
        } catch (k) {}
        try {
            window.sessionStorage &&
            null !== window.sessionStorage &&
            (e.sessionStorage = window.sessionStorage["3AB9D23F7A4B3C9B"]);
        } catch (k) {}
        try {
            p.globalStorage &&
            (e.globalStorage =
                window.globalStorage[".localdomain"]["3AB9D23F7A4B3C9B"]);
        } catch (k) {}
        try {
            d &&
            "function" == typeof d.load &&
            "function" == typeof d.getAttribute &&
            (d.load("jdgia_user_data"),
                (e.userData = d.getAttribute("3AB9D23F7A4B3C9B")));
        } catch (k) {}
        try {
            E.indexedDbId && (e.indexedDb = E.indexedDbId);
        } catch (k) {}
        try {
            E.webDbId && (e.webDb = E.webDbId);
        } catch (k) {}
        try {
            for (var r in e)
                if (32 < e[r].length) {
                    _JdEid = e[r];
                    n || (_eidFlag = !0);
                    break;
                }
        } catch (k) {}
        try {
            ("undefined" === typeof _JdEid || 0 >= _JdEid.length) &&
            this.db("3AB9D23F7A4B3C9B");
            if ("undefined" === typeof _JdEid || 0 >= _JdEid.length)
                _JdEid = u("3AB9D23F7A4B3C9B");
            if ("undefined" === typeof _JdEid || 0 >= _JdEid.length) _eidFlag = !0;
        } catch (k) {}
        return _JdEid;
    };
    var w = [],
        A =
            "Abadi MT Condensed Light;Adobe Fangsong Std;Adobe Hebrew;Adobe Ming Std;Agency FB;Arab;Arabic Typesetting;Arial Black;Batang;Bauhaus 93;Bell MT;Bitstream Vera Serif;Bodoni MT;Bookman Old Style;Braggadocio;Broadway;Calibri;Californian FB;Castellar;Casual;Centaur;Century Gothic;Chalkduster;Colonna MT;Copperplate Gothic Light;DejaVu LGC Sans Mono;Desdemona;DFKai-SB;Dotum;Engravers MT;Eras Bold ITC;Eurostile;FangSong;Forte;Franklin Gothic Heavy;French Script MT;Gabriola;Gigi;Gisha;Goudy Old Style;Gulim;GungSeo;Haettenschweiler;Harrington;Hiragino Sans GB;Impact;Informal Roman;KacstOne;Kino MT;Kozuka Gothic Pr6N;Lohit Gujarati;Loma;Lucida Bright;Lucida Fax;Magneto;Malgun Gothic;Matura MT Script Capitals;Menlo;MingLiU-ExtB;MoolBoran;MS PMincho;MS Reference Sans Serif;News Gothic MT;Niagara Solid;Nyala;Palace Script MT;Papyrus;Perpetua;Playbill;PMingLiU;Rachana;Rockwell;Sawasdee;Script MT Bold;Segoe Print;Showcard Gothic;SimHei;Snap ITC;TlwgMono;Tw Cen MT Condensed Extra Bold;Ubuntu;Umpush;Univers;Utopia;Vladimir Script;Wide Latin".split(
                ";"
            ),
        y =
            "4game;AdblockPlugin;AdobeExManCCDetect;AdobeExManDetect;Alawar NPAPI utils;Aliedit Plug-In;Alipay Security Control 3;AliSSOLogin plugin;AmazonMP3DownloaderPlugin;AOL Media Playback Plugin;AppUp;ArchiCAD;AVG SiteSafety plugin;Babylon ToolBar;Battlelog Game Launcher;BitCometAgent;Bitdefender QuickScan;BlueStacks Install Detector;CatalinaGroup Update;Citrix ICA Client;Citrix online plug-in;Citrix Receiver Plug-in;Coowon Update;DealPlyLive Update;Default Browser Helper;DivX Browser Plug-In;DivX Plus Web Player;DivX VOD Helper Plug-in;doubleTwist Web Plugin;Downloaders plugin;downloadUpdater;eMusicPlugin DLM6;ESN Launch Mozilla Plugin;ESN Sonar API;Exif Everywhere;Facebook Plugin;File Downloader Plug-in;FileLab plugin;FlyOrDie Games Plugin;Folx 3 Browser Plugin;FUZEShare;GDL Object Web Plug-in 16.00;GFACE Plugin;Ginger;Gnome Shell Integration;Google Earth Plugin;Google Earth Plug-in;Google Gears 0.5.33.0;Google Talk Effects Plugin;Google Update;Harmony Firefox Plugin;Harmony Plug-In;Heroes & Generals live;HPDetect;Html5 location provider;IE Tab plugin;iGetterScriptablePlugin;iMesh plugin;Kaspersky Password Manager;LastPass;LogMeIn Plugin 1.0.0.935;LogMeIn Plugin 1.0.0.961;Ma-Config.com plugin;Microsoft Office 2013;MinibarPlugin;Native Client;Nitro PDF Plug-In;Nokia Suite Enabler Plugin;Norton Identity Safe;npAPI Plugin;NPLastPass;NPPlayerShell;npTongbuAddin;NyxLauncher;Octoshape Streaming Services;Online Storage plug-in;Orbit Downloader;Pando Web Plugin;Parom.TV player plugin;PDF integrado do WebKit;PDF-XChange Viewer;PhotoCenterPlugin1.1.2.2;Picasa;PlayOn Plug-in;QQ2013 Firefox Plugin;QQDownload Plugin;QQMiniDL Plugin;QQMusic;RealDownloader Plugin;Roblox Launcher Plugin;RockMelt Update;Safer Update;SafeSearch;Scripting.Dictionary;SefClient Plugin;Shell.UIHelper;Silverlight Plug-In;Simple Pass;Skype Web Plugin;SumatraPDF Browser Plugin;Symantec PKI Client;Tencent FTN plug-in;Thunder DapCtrl NPAPI Plugin;TorchHelper;Unity Player;Uplay PC;VDownloader;Veetle TV Core;VLC Multimedia Plugin;Web Components;WebKit-integrierte PDF;WEBZEN Browser Extension;Wolfram Mathematica;WordCaptureX;WPI Detector 1.4;Yandex Media Plugin;Yandex PDF Viewer;YouTube Plug-in;zako".split(
                ";"
            );
    this.toJson = "object" === typeof JSON && JSON.stringify;
    this.init = function () {
        _fingerprint_step = 6;
        t();
        _fingerprint_step = 7;
        "function" !== typeof this.toJson &&
        (this.toJson = function (n) {
            var e = typeof n;
            if ("undefined" === e || null === n) return "null";
            if ("number" === e || "boolean" === e) return n + "";
            if ("object" === e && n && n.constructor === Array) {
                e = [];
                for (var f = 0; n.length > f; f++) e.push(this.toJson(n[f]));
                return "[" + (e + "]");
            }
            if ("object" === e) {
                e = [];
                for (f in n)
                    n.hasOwnProperty(f) && e.push('"' + f + '":' + this.toJson(n[f]));
                return "{" + (e + "}");
            }
        });
        this.sdkCollectInit();
    };
    this.sdkCollectInit = function () {
        try {
            try {
                bp_bizid && (this.bizId = bp_bizid);
            } catch (f) {
                this.bizId = "jsDefault";
            }
            var n = navigator.userAgent.toLowerCase(),
                e =
                    !n.match(/(iphone|ipad|ipod)/i) &&
                    (-1 < n.indexOf("android") || -1 < n.indexOf("adr"));
            this.deviceInfo.isJdApp = -1 < n.indexOf("jdapp");
            this.deviceInfo.isJrApp = -1 < n.indexOf("jdjr");
            this.deviceInfo.userAgent = navigator.userAgent;
            this.deviceInfo.isAndroid = e;
            this.createWorker();
        } catch (f) {}
    };
    this.db = function (n, e) {
        try {
            _fingerprint_step = "m";
            if (window.openDatabase) {
                var f = window.openDatabase(
                    "sqlite_jdtdstorage",
                    "",
                    "jdtdstorage",
                    1048576
                );
                void 0 !== e && "" != e
                    ? f.transaction(function (r) {
                        r.executeSql(
                            "CREATE TABLE IF NOT EXISTS cache(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, value TEXT NOT NULL, UNIQUE (name))",
                            [],
                            function (k, g) {},
                            function (k, g) {}
                        );
                        r.executeSql(
                            "INSERT OR REPLACE INTO cache(name, value) VALUES(?, ?)",
                            [n, e],
                            function (k, g) {},
                            function (k, g) {}
                        );
                    })
                    : f.transaction(function (r) {
                        r.executeSql(
                            "SELECT value FROM cache WHERE name=?",
                            [n],
                            function (k, g) {
                                1 <= g.rows.length && (_JdEid = g.rows.item(0).value);
                            },
                            function (k, g) {}
                        );
                    });
            }
            _fingerprint_step = "n";
        } catch (r) {}
    };
    this.setCookie = function (n, e) {
        void 0 !== e &&
        "" != e &&
        (document.cookie =
            n +
            "=" +
            e +
            "; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/; domain=" +
            _root_domain);
    };
    this.tdencrypt = function (n) {
        n = this.toJson(n);
        n = encodeURIComponent(n);
        var e = "",
            f = 0;
        do {
            var r = n.charCodeAt(f++);
            var k = n.charCodeAt(f++);
            var g = n.charCodeAt(f++);
            var m = r >> 2;
            r = ((r & 3) << 4) | (k >> 4);
            var a = ((k & 15) << 2) | (g >> 6);
            var b = g & 63;
            isNaN(k) ? (a = b = 64) : isNaN(g) && (b = 64);
            e =
                e +
                "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(
                    m
                ) +
                "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(
                    r
                ) +
                "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(
                    a
                ) +
                "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(
                    b
                );
        } while (f < n.length);
        return e + "/";
    };
    this.collect = function () {
        var n = new Date();
        try {
            var e = document.createElement("div"),
                f = {},
                r =
                    "ActiveBorder ActiveCaption AppWorkspace Background ButtonFace ButtonHighlight ButtonShadow ButtonText CaptionText GrayText Highlight HighlightText InactiveBorder InactiveCaption InactiveCaptionText InfoBackground InfoText Menu MenuText Scrollbar ThreeDDarkShadow ThreeDFace ThreeDHighlight ThreeDLightShadow ThreeDShadow Window WindowFrame WindowText".split(
                        " "
                    );
            if (window.getComputedStyle)
                for (var k = 0; k < r.length; k++)
                    document.body.appendChild(e),
                        (e.style.color = r[k]),
                        (f[r[k]] = window.getComputedStyle(e).getPropertyValue("color")),
                        document.body.removeChild(e);
        } catch (D) {}
        e = {
            ca: {},
            ts: {},
            m: {},
        };
        r = e.ca;
        r.tdHash = _jdfp_canvas_md5;
        var g = !1;
        if ((k = window.WebGLRenderingContext))
            (k = navigator.userAgent),
                (k = k.toLowerCase()),
                (k =
                    (0 < k.indexOf("jdjr-app") || 0 <= k.indexOf("jdapp")) &&
                    (0 < k.indexOf("iphone") || 0 < k.indexOf("ipad"))
                        ? !0
                        : !1),
                (k = !k);
        if (k) {
            var m = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"],
                a = [],
                b;
            for (k = 0; k < m.length; k++)
                try {
                    var c = !1;
                    (c = document.createElement("canvas").getContext(m[k], {
                        stencil: !0,
                    })) &&
                    c &&
                    ((b = c), a.push(m[k]));
                } catch (D) {}
            a.length &&
            (g = {
                name: a,
                gl: b,
            });
        }
        if (g) {
            k = g.gl;
            r.contextName = g.name.join();
            r.webglversion = k.getParameter(k.VERSION);
            r.shadingLV = k.getParameter(k.SHADING_LANGUAGE_VERSION);
            r.vendor = k.getParameter(k.VENDOR);
            r.renderer = k.getParameter(k.RENDERER);
            b = [];
            try {
                (b = k.getSupportedExtensions()), (r.extensions = b);
            } catch (D) {}
            try {
                var l = k.getExtension("WEBGL_debug_renderer_info");
                l &&
                ((r.wuv = k.getParameter(l.UNMASKED_VENDOR_WEBGL)),
                    (r.wur = k.getParameter(l.UNMASKED_RENDERER_WEBGL)));
            } catch (D) {}
        }
        e.m.documentMode = document.documentMode;
        e.m.compatMode = document.compatMode;
        l = [];
        // r = new v;
        // for (k = 0; k < A.length; k++) b = A[k], r.checkSupportFont(b) && l.push(b);
        e.fo = l;
        k = {};
        l = [];
        for (var h in navigator)
            "object" != typeof navigator[h] && (k[h] = navigator[h]), l.push(h);
        k.enumerationOrder = l;
        k.javaEnabled = false;
        try {
            k.taintEnabled = navigator.taintEnabled();
        } catch (D) {}
        e.n = k;
        k = navigator.userAgent.toLowerCase();
        if ((h = k.match(/rv:([\d.]+)\) like gecko/))) var q = h[1];
        if ((h = k.match(/msie ([\d.]+)/))) q = h[1];
        h = [];
        if (q)
            for (
                q =
                    "AcroPDF.PDF;Adodb.Stream;AgControl.AgControl;DevalVRXCtrl.DevalVRXCtrl.1;MacromediaFlashPaper.MacromediaFlashPaper;Msxml2.DOMDocument;Msxml2.XMLHTTP;PDF.PdfCtrl;QuickTime.QuickTime;QuickTimeCheckObject.QuickTimeCheck.1;RealPlayer;RealPlayer.RealPlayer(tm) ActiveX Control (32-bit);RealVideo.RealVideo(tm) ActiveX Control (32-bit);rmocx.RealPlayer G2 Control;Scripting.Dictionary;Shell.UIHelper;ShockwaveFlash.ShockwaveFlash;SWCtl.SWCtl;TDCCtl.TDCCtl;WMPlayer.OCX".split(
                        ";"
                    ),
                    k = 0;
                k < q.length;
                k++
            ) {
                var z = q[k];
                try {
                    var C = new ActiveXObject(z);
                    l = {};
                    l.name = z;
                    try {
                        l.version = C.GetVariable("$version");
                    } catch (D) {}
                    try {
                        l.version = C.GetVersions();
                    } catch (D) {}
                    (l.version && 0 < l.version.length) || (l.version = "");
                    h.push(l);
                } catch (D) {}
            }
        else {
            q = navigator.plugins;
            l = {};
            for (k = 0; k < q.length; k++) (z = q[k]), (l[z.name] = 1), h.push(x(z));
            for (k = 0; k < y.length; k++)
                (C = y[k]), l[C] || ((z = q[C]), z && h.push(x(z)));
        }
        q =
            "availHeight availWidth colorDepth bufferDepth deviceXDPI deviceYDPI height width logicalXDPI logicalYDPI pixelDepth updateInterval".split(
                " "
            );
        z = {};
        for (k = 0; q.length > k; k++)
            (C = q[k]), void 0 !== screen[C] && (z[C] = screen[C]);
        q = ["devicePixelRatio", "screenTop", "screenLeft"];
        l = {};
        for (k = 0; q.length > k; k++)
            (C = q[k]), void 0 !== window[C] && (l[C] = window[C]);
        e.p = h;
        e.w = l;
        e.s = z;
        e.sc = f;
        e.tz = n.getTimezoneOffset();
        e.lil = w.sort().join("|");
        e.wil = "";
        f = {};
        try {
            (f.cookie = navigator.cookieEnabled),
                (f.localStorage = !!window.localStorage),
                (f.sessionStorage = !!window.sessionStorage),
                (f.globalStorage = !!window.globalStorage),
                (f.indexedDB = !!window.indexedDB);
        } catch (D) {}
        e.ss = f;
        e.ts.deviceTime = n.getTime();
        e.ts.deviceEndTime = new Date().getTime();
        return this.tdencrypt(e);
    };
    this.collectSdk = function (n) {
        try {
            var e = this,
                f = !1,
                r = e.getLocal("BATQW722QTLYVCRD");
            if (null != r && void 0 != r && "" != r)
                try {
                    var k = JSON.parse(r),
                        g = new Date().getTime();
                    null != k &&
                    void 0 != k.t &&
                    "number" == typeof k.t &&
                    (12e5 >= g - k.t &&
                    void 0 != k.tk &&
                    null != k.tk &&
                    "" != k.tk &&
                    k.tk.startsWith("jdd")
                        ? ((e.deviceInfo.sdkToken = k.tk), (f = !0))
                        : void 0 != k.tk &&
                        null != k.tk &&
                        "" != k.tk &&
                        (e.deviceInfo.sdkToken = k.tk));
                } catch (m) {}
            r = !1;
            e.deviceInfo.isJdApp
                ? ((e.deviceInfo.clientVersion = navigator.userAgent.split(";")[2]),
                (r = 0 < e.compareVersion(e.deviceInfo.clientVersion, "7.0.2")) &&
                !f &&
                e.getJdSdkCacheToken(function (m) {
                    e.deviceInfo.sdkToken = m;
                    (null != m && "" != m && m.startsWith("jdd")) ||
                    e.getJdBioToken(n);
                }))
                : e.deviceInfo.isJrApp &&
                ((e.deviceInfo.clientVersion = navigator.userAgent.match(
                    /clientVersion=([^&]*)(&|$)/
                )[1]),
                (r = 0 < e.compareVersion(e.deviceInfo.clientVersion, "4.6.0")) &&
                !f &&
                e.getJdJrSdkCacheToken(function (m) {
                    e.deviceInfo.sdkToken = m;
                    (null != m && "" != m && m.startsWith("jdd")) ||
                    e.getJdJrBioToken(n);
                }));
            "function" == typeof n && n(e.deviceInfo);
        } catch (m) {}
    };
    this.compareVersion = function (n, e) {
        try {
            if (n === e) return 0;
            var f = n.split(".");
            var r = e.split(".");
            for (n = 0; n < f.length; n++) {
                var k = parseInt(f[n]);
                if (!r[n]) return 1;
                var g = parseInt(r[n]);
                if (k < g) break;
                if (k > g) return 1;
            }
        } catch (m) {}
        return -1;
    };
    this.isWKWebView = function () {
        return this.deviceInfo.userAgent.match(/supportJDSHWK/i) ||
        1 == window._is_jdsh_wkwebview
            ? !0
            : !1;
    };
    this.getErrorToken = function (n) {
        try {
            if (n) {
                var e = (n + "").match(/"token":"(.*?)"/);
                if (e && 1 < e.length) return e[1];
            }
        } catch (f) {}
        return "";
    };
    this.getJdJrBioToken = function (n) {
        var e = this;
        "undefined" != typeof JrBridge &&
        null != JrBridge &&
        "undefined" != typeof JrBridge._version &&
        (0 > e.compareVersion(JrBridge._version, "2.0.0")
            ? console.error(
                "\u6865\u7248\u672c\u4f4e\u4e8e2.0\u4e0d\u652f\u6301bio"
            )
            : JrBridge.callNative(
                {
                    type: e.bioConfig.type,
                    operation: e.bioConfig.operation,
                    biometricData: {
                        bizId: e.bizId,
                        duraTime: e.bioConfig.duraTime,
                        interval: e.bioConfig.interval,
                    },
                },
                function (f) {
                    try {
                        "object" != typeof f && (f = JSON.parse(f)),
                            (e.deviceInfo.sdkToken = f.token);
                    } catch (r) {
                        console.error(r);
                    }
                    null != e.deviceInfo.sdkToken &&
                    "" != e.deviceInfo.sdkToken &&
                    ((f = {
                        tk: e.deviceInfo.sdkToken,
                        t: new Date().getTime(),
                    }),
                        e.store("BATQW722QTLYVCRD", JSON.stringify(f)));
                }
            ));
    };
    this.getJdJrSdkCacheToken = function (n) {
        var e = this;
        try {
            "undefined" == typeof JrBridge ||
            null == JrBridge ||
            "undefined" == typeof JrBridge._version ||
            0 > e.compareVersion(JrBridge._version, "2.0.0") ||
            JrBridge.callNative(
                {
                    type: e.bioConfig.type,
                    operation: 5,
                    biometricData: {
                        bizId: e.bizId,
                        duraTime: e.bioConfig.duraTime,
                        interval: e.bioConfig.interval,
                    },
                },
                function (f) {
                    var r = "";
                    try {
                        "object" != typeof f && (f = JSON.parse(f)), (r = f.token);
                    } catch (k) {
                        console.error(k);
                    }
                    null != r &&
                    "" != r &&
                    "function" == typeof n &&
                    (n(r),
                    r.startsWith("jdd") &&
                    ((f = {
                        tk: r,
                        t: new Date().getTime(),
                    }),
                        e.store("BATQW722QTLYVCRD", JSON.stringify(f))));
                }
            );
        } catch (f) {}
    };
    this.getJdBioToken = function (n) {
        var e = this;
        n = JSON.stringify({
            businessType: "bridgeBiologicalProbe",
            callBackName: "_bioDeviceCb",
            params: {
                pin: "",
                jsonData: {
                    type: e.bioConfig.type,
                    operation: e.bioConfig.operation,
                    data: {
                        bizId: e.bizId,
                        duraTime: e.bioConfig.duraTime,
                        interval: e.bioConfig.interval,
                    },
                    biometricData: {
                        bizId: e.bizId,
                        duraTime: e.bioConfig.duraTime,
                        interval: e.bioConfig.interval,
                    },
                },
            },
        });
        e.isWKWebView()
            ? window.webkit.messageHandlers.JDAppUnite.postMessage({
                method: "notifyMessageToNative",
                params: n,
            })
            : window.JDAppUnite && window.JDAppUnite.notifyMessageToNative(n);
        window._bioDeviceCb = function (f) {
            try {
                var r = "object" == typeof f ? f : JSON.parse(f);
                if (void 0 != r && null != r && "0" != r.status) return;
                null != r.data.token &&
                void 0 != r.data.token &&
                "" != r.data.token &&
                (e.deviceInfo.sdkToken = r.data.token);
            } catch (k) {
                (f = e.getErrorToken(f)),
                null != f && "" != f && (e.deviceInfo.sdkToken = f);
            }
            null != e.deviceInfo.sdkToken &&
            "" != e.deviceInfo.sdkToken &&
            ((f = {
                tk: e.deviceInfo.sdkToken,
                t: new Date().getTime(),
            }),
                e.store("BATQW722QTLYVCRD", JSON.stringify(f)));
        };
    };
    this.getJdSdkCacheToken = function (n) {
        try {
            var e = this,
                f = JSON.stringify({
                    businessType: "bridgeBiologicalProbe",
                    callBackName: "_bioDeviceSdkCacheCb",
                    params: {
                        pin: "",
                        jsonData: {
                            type: e.bioConfig.type,
                            operation: 5,
                            data: {
                                bizId: e.bizId,
                                duraTime: e.bioConfig.duraTime,
                                interval: e.bioConfig.interval,
                            },
                            biometricData: {
                                bizId: e.bizId,
                                duraTime: e.bioConfig.duraTime,
                                interval: e.bioConfig.interval,
                            },
                        },
                    },
                });
            e.isWKWebView()
                ? window.webkit.messageHandlers.JDAppUnite.postMessage({
                    method: "notifyMessageToNative",
                    params: f,
                })
                : window.JDAppUnite && window.JDAppUnite.notifyMessageToNative(f);
            window._bioDeviceSdkCacheCb = function (r) {
                var k = "";
                try {
                    var g = "object" == typeof r ? r : JSON.parse(r);
                    if (void 0 != g && null != g && "0" != g.status) return;
                    k = g.data.token;
                } catch (m) {
                    k = e.getErrorToken(r);
                }
                null != k &&
                "" != k &&
                "function" == typeof n &&
                (n(k),
                k.startsWith("jdd") &&
                ((r = {
                    tk: k,
                    t: new Date().getTime(),
                }),
                    e.store("BATQW722QTLYVCRD", JSON.stringify(r))));
            };
        } catch (r) {}
    };
    this.store = function (n, e) {
        try {
            this.setCookie(n, e);
        } catch (f) {}
        try {
            window.localStorage && window.localStorage.setItem(n, e);
        } catch (f) {}
        try {
            window.sessionStorage && window.sessionStorage.setItem(n, e);
        } catch (f) {}
        try {
            window.globalStorage &&
            window.globalStorage[".localdomain"].setItem(n, e);
        } catch (f) {}
        try {
            this.db(n, _JdEid);
        } catch (f) {}
    };
    this.getLocal = function (n) {
        var e = {},
            f = null;
        try {
            var r = document.cookie.replace(
                new RegExp("(?:(?:^|.*;\\s*)" + n + "\\s*\\=\\s*([^;]*).*$)|^.*$"),
                "$1"
            );
            0 !== r.length && (e.cookie = r);
        } catch (g) {}
        try {
            window.localStorage &&
            null !== window.localStorage &&
            0 !== window.localStorage.length &&
            (e.localStorage = window.localStorage.getItem(n));
        } catch (g) {}
        try {
            window.sessionStorage &&
            null !== window.sessionStorage &&
            (e.sessionStorage = window.sessionStorage[n]);
        } catch (g) {}
        try {
            p.globalStorage &&
            (e.globalStorage = window.globalStorage[".localdomain"][n]);
        } catch (g) {}
        try {
            d &&
            "function" == typeof d.load &&
            "function" == typeof d.getAttribute &&
            (d.load("jdgia_user_data"), (e.userData = d.getAttribute(n)));
        } catch (g) {}
        try {
            E.indexedDbId && (e.indexedDb = E.indexedDbId);
        } catch (g) {}
        try {
            E.webDbId && (e.webDb = E.webDbId);
        } catch (g) {}
        try {
            for (var k in e)
                if (32 < e[k].length) {
                    f = e[k];
                    break;
                }
        } catch (g) {}
        try {
            if (null == f || "undefined" === typeof f || 0 >= f.length) f = u(n);
        } catch (g) {}
        return f;
    };
    this.createWorker = function () {
        if (window.Worker) {
            try {
                var n = new Blob(
                    [
                        "onmessage = function (event) {\n    var data = JSON.parse(event.data);\n    try {\n        var httpRequest;\n        try {\n            httpRequest = new XMLHttpRequest();\n        } catch (h) {}\n        if (!httpRequest)\n            try {\n                httpRequest = new (window['ActiveXObject'])('Microsoft.XMLHTTP')\n            } catch (l) {}\n        if (!httpRequest)\n            try {\n                httpRequest = new (window['ActiveXObject'])('Msxml2.XMLHTTP')\n            } catch (r) {}\n        if (!httpRequest)\n            try {\n                httpRequest = new (window['ActiveXObject'])('Msxml3.XMLHTTP')\n            } catch (n) {}\n\n        if(data){\n            httpRequest['open']('POST', data.url, false);\n            httpRequest['setRequestHeader']('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');\n            httpRequest['onreadystatechange'] = function () {\n                if (4 === httpRequest['readyState'] && 200 === httpRequest['status']) {\n                    postMessage(httpRequest.responseText);\n                }\n            };\n            httpRequest['send'](data.data);\n        }\n\n    }catch (e){console.error(e);}\n};",
                    ],
                    {
                        type: "application/javascript",
                    }
                );
            } catch (e) {
                (window.BlobBuilder =
                    window.BlobBuilder ||
                    window.WebKitBlobBuilder ||
                    window.MozBlobBuilder),
                    (n = new BlobBuilder()),
                    n.append(
                        "onmessage = function (event) {\n    var data = JSON.parse(event.data);\n    try {\n        var httpRequest;\n        try {\n            httpRequest = new XMLHttpRequest();\n        } catch (h) {}\n        if (!httpRequest)\n            try {\n                httpRequest = new (window['ActiveXObject'])('Microsoft.XMLHTTP')\n            } catch (l) {}\n        if (!httpRequest)\n            try {\n                httpRequest = new (window['ActiveXObject'])('Msxml2.XMLHTTP')\n            } catch (r) {}\n        if (!httpRequest)\n            try {\n                httpRequest = new (window['ActiveXObject'])('Msxml3.XMLHTTP')\n            } catch (n) {}\n\n        if(data){\n            httpRequest['open']('POST', data.url, false);\n            httpRequest['setRequestHeader']('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');\n            httpRequest['onreadystatechange'] = function () {\n                if (4 === httpRequest['readyState'] && 200 === httpRequest['status']) {\n                    postMessage(httpRequest.responseText);\n                }\n            };\n            httpRequest['send'](data.data);\n        }\n\n    }catch (e){console.error(e);}\n};"
                    ),
                    (n = n.getBlob());
            }
            try {
                this.worker = new Worker(URL.createObjectURL(n));
            } catch (e) {}
        }
    };
    this.reportWorker = function (n, e, f, r) {
        try {
            null != this.worker &&
            (this.worker.postMessage(
                JSON.stringify({
                    url: n,
                    data: e,
                    success: !1,
                    async: !1,
                })
            ),
                (this.worker.onmessage = function (k) {}));
        } catch (k) {}
    };
})();

function td_collect_exe() {
    _fingerprint_step = 8;
    var t = td_collect.collect();
    td_collect.collectSdk();
    var u = "string" === typeof orderId ? orderId : "",
        v = "undefined" !== typeof jdfp_pinenp_ext && jdfp_pinenp_ext ? 2 : 1;
    u = {
        pin: _jdJrTdCommonsObtainPin(v),
        oid: u,
        p: "https:" == document.location.protocol ? "s" : "h",
        fp: risk_jd_local_fingerprint,
        ctype: v,
        v: "2.7.10.4",
        f: "3",
    };
    try {
        (u.o = _CurrentPageUrl), (u.qs = _url_query_str);
    } catch (w) {}
    _fingerprint_step = 9;
    0 >= _JdEid.length &&
    ((_JdEid = td_collect.obtainLocal()), 0 < _JdEid.length && (_eidFlag = !0));
    u.fc = _JdEid;
    try {
        u.t = jd_risk_token_id;
    } catch (w) {}
    try {
        if ("undefined" != typeof gia_fp_qd_uuid && 0 <= gia_fp_qd_uuid.length)
            u.qi = gia_fp_qd_uuid;
        else {
            var x = _JdJrRiskClientStorage.jdtdstorage_cookie("qd_uid");
            u.qi = void 0 == x ? "" : x;
        }
    } catch (w) {}
    "undefined" != typeof jd_shadow__ &&
    0 < jd_shadow__.length &&
    (u.jtb = jd_shadow__);
    try {
        td_collect.deviceInfo &&
        void 0 != td_collect.deviceInfo &&
        null != td_collect.deviceInfo.sdkToken &&
        "" != td_collect.deviceInfo.sdkToken
            ? ((u.stk = td_collect.deviceInfo.sdkToken), (td_collect.isRpTok = !0))
            : (td_collect.isRpTok = !1);
    } catch (w) {
        td_collect.isRpTok = !1;
    }
    x = td_collect.tdencrypt(u);
    // console.log(u)
    return { a: x, d: t };
}

function _jdJrTdCommonsObtainPin(t) {
    var u = "";
    "string" === typeof jd_jr_td_risk_pin && 1 == t
        ? (u = jd_jr_td_risk_pin)
        : "string" === typeof pin
        ? (u = pin)
        : "object" === typeof pin &&
        "string" === typeof jd_jr_td_risk_pin &&
        (u = jd_jr_td_risk_pin);
    return u;
}

function getBody(userAgent, url = document.location.href) {
    navigator.userAgent = userAgent;
    let href = url;
    let choose = /((https?:)\/\/([^\/]+))(.+)/.exec(url);
    let [, origin, protocol, host, pathname] = choose;
    document.location.href = href;
    document.location.origin = origin;
    document.location.protocol = protocol;
    document.location.host = host;
    document.location.pathname = pathname;
    const JF = new JdJrTdRiskFinger();
    let fp = JF.f.get(function (t) {
        risk_jd_local_fingerprint = t;
        return t;
    });
    let arr = td_collect_exe();
    return { fp, ...arr };
}


// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date(new Date().getTime()+new Date().getTimezoneOffset()*60*1000+8*60*60*1000);let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}