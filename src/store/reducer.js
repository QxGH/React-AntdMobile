const defaultState = {
  number: 100,
  login_name: 'QxGH'
};

//reducer可以接收state，但是绝不能修改state
// reducer必须是纯函数
//纯函数：给固定的输入，一定有固定的输出（不能有不固定的日期函数），不会有副作用（改变参数的值）
export default (state = defaultState, action) => {
  //input
  if (action.type === 'add_number') {
    const newState = JSON.parse(JSON.stringify(state)); //简单的深拷贝
    newState.number++;
    return newState;
  };

  //button
  if (action.type === "sub_number") {
    const newState = JSON.parse(JSON.stringify(state)); //简单的深拷贝
    newState.number--;
    return newState;
  };

  return state;
}