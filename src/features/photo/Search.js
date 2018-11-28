import React from "react";
import { Row } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PhotoCard from "../../common/PhotoCard";
import { search } from "./redux";

const enhance = connect(
  state => ({
    photos: state.photo.photos
  }),
  { search }
);

export class Search extends React.Component {
  componentDidMount() {
    this.props.search();
  }
  render() {
    return (
      <div>
        <h1>
          Search results for "{this.props.location.search.match(/q=(.+)/)[1]}"
        </h1>
        <Row gutter={16}>
          {this.props.photos.map(photo => (
            <Link to={`/photo/${photo.id}`}>
              <PhotoCard key={photo.id} photo={photo} />
            </Link>
          ))}
        </Row>
      </div>
    );
  }
}

export default enhance(Search);
