import React from "react";
import { Spin, Avatar } from "antd";
import { connect } from "react-redux";
import { get } from "./redux";

const enhance = connect(
  state => ({
    photo: state.photo.photo
  }),
  { get }
);

class Detail extends React.Component {
  componentDidMount() {
    this.props.get(this.props.match.params.id);
  }
  render() {
    const { photo } = this.props;
    if (!photo) {
      return <Spin size="large" />;
    }
    return (
      <div>
        <h1>{photo.description}</h1>
        <h2>{photo.views} Views</h2>
        <img src={photo.urls.regular} alt={photo.description} />
        <p>
          <Avatar size="large" src={photo.user.profile_image.medium} />{" "}
          {photo.user.name}
        </p>
      </div>
    );
  }
}

export default enhance(Detail);
