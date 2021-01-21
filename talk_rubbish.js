const target = {
  developer: '工程師',
  designer: '設計師',
  founder: '創業家'
}
const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  founder: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

}

const phrase = ['很簡單', '很容易', '很快', '很正常']



function generator(target, task) {

  const index1 = Math.floor(Math.random() * 4)
  const index2 = Math.floor(Math.random() * 4)

  return `身為${target},${task[index1]},${phrase[index2]}`.toString()
}

function TalkRubbish(options) {
  let TalkRubbish =``
  const developer = target.developer
  const designer = target.designer
  const founder = target.founder

  const developerTask = task.engineer
  const designerTask = task.designer
  const founderTask = task.founder


  if (options.character === 'developer') {
    TalkRubbish += generator(developer, developerTask)
  }

  if (options.character === 'designer') {
    TalkRubbish += generator(designer, designerTask)
  }

  if (options.character === 'founder') {
    TalkRubbish += generator(founder, founderTask)
  }  
  
  return TalkRubbish
}

module.exports = TalkRubbish