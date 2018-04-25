const Messages = {
  ja_jp: {
    language: '日本語',
    playinggame: prefix => `${prefix}helpでhelpを表示`,
    helphelp: 'コマンド一覧を表示',
    helpping: 'ボットのPingを確認',
    helpavatar: '送信者のプロフィール画像を表示',
    helptranslate: 'テキストを翻訳',
    helpdiscordstats: 'Discordのサーバー状態を確認',
    helptalk: '雑談機能',
    helpserver: 'サーバーの情報を表示',
    helpofficial: '公式サイト',
    helpbugreport: 'バグ報告・公式Discordサーバー',
    pingsuccsess: ping => `ポン！Pingの確認に成功しました！ボットのPingは${ping}msです！`,
    transmsg: '翻訳したい内容を入力してください。',
    transmsgtwo: '翻訳先の言語を入力してください。',
    transfailed: '翻訳に失敗しました。翻訳する内容または翻訳先の言語が無効な可能性があります。',
    transoriginal: 'オリジナル：',
    discordstatsnormal: '正常',
    discordstatsabnormal: '不安定',
    discordstatsresolved: '解決済み',
    discordstatsreunresolved: '未解決',
    euwest: '西ヨーロッパ',
    eucentral: '中央ヨーロッパ',
    singapore: 'シンガポール',
    japan: '日本',
    russia: 'ロシア',
    hongkong: '香港',
    uscentral: '中央アメリカ',
    useast: '東アメリカ',
    ussouth: '南アメリカ',
    uswest: '西アメリカ',
    brazil: 'ブラジル',
    servertitel: 'サーバーステータス',
    serverid: 'サーバーID',
    servermember: '人数',
    serverowner: 'オーナー',
    serverregion: 'リージョン',
    serverchannel: 'チャンネル数',
    servercreate: 'サーバー作成日',
    talkoff: 'この機能はOFFです',
  },
  en_us: {
    language: 'English',
    playinggame: prefix => `Type ${prefix}help to show help`,
    helphelp: 'Show commands list',
    helpping: 'Check bot\'s ping',
    helpavatar: 'Show sender avatar',
    helptranslate: 'Translate text',
    helpdiscordstats: 'Check Discord server status',
    helptalk: 'Chat function',
    helpserver: 'Show server information',
    helpofficial: 'Official Website',
    helpbugreport: 'Bug Report・Official Discord Server',
    pingsuccsess: ping => `Pong! Successful check ping! Bot's ping is ${ping}ms!`,
    transmsg: 'Please type content of you want to translate.',
    transmsgtwo: 'Please type language of translation destination.',
    transfailed: 'Failed translate. Translated content or translate language destination may be invalid.',
    transoriginal: 'Original:',
    discordstatsnormal: 'Normal',
    discordstatsabnormal: 'Abnormal',
    discordstatsresolved: 'Resolved',
    discordstatsreunresolved: 'Unresolved',
    euwest: 'EU West',
    eucentral: 'EU Central',
    singapore: 'Singapore',
    japan: 'Japan',
    russia: 'Russia',
    hongkong: 'Hong Kong',
    uscentral: 'US Central',
    useast: 'US East',
    ussouth: 'US South',
    uswest: 'US West',
    brazil: 'Brazil',
    servertitel: 'ServerStatus',
    serverid: 'ServerID',
    servermember: 'Members',
    serverowner: 'Owner',
    serverregion: 'Region',
    serverchannel: 'Channels',
    servercreate: 'Created On',
    talkoff: 'This function is OFF',
  },
}

module.exports = Messages
