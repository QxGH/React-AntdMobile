const defaultState = {
  number: 100,
  login_name: 'QxGH'
};

//reducer可以接收state，但是绝不能修改state
// reducer必须是纯函数
//纯函数：给固定的输入，一定有固定的输出（不能有不固定的日期函数），不会有副作用（改变参数的值）
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state)); //简单的深拷贝

  switch(action.type) {
    case 'add_number':
      newState.number++;
      break;
    case 'sub_number':
      newState.number--;
      break;
    case 'set_number': 
      newState.number = action.number;
      break;
    default:
      return newState;
  };

  return newState;
}