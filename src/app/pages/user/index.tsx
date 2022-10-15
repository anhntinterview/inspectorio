import * as React from "react";
import { BaseComponent } from "core/component/base";
import UserView from "app/view/user";
import UserModel from "app/controller/user.model";
import { IUserProps } from "app/view/user";

class UserPage extends BaseComponent({
  model: new UserModel(),
})<IUserProps> {
  baseElement = () => <UserView model={this.props.model} />;
}

export default UserPage;
