import styled from "@emotion/styled";


const Marker = styled.div`
  background: red;
  min-width: 10px;
  max-width: fit-content;
  height: 20px;
`;

const MapMarker = ({ onClick, children, feature }) => {
  const _onClick = (e) => {
    onClick(feature.properties.description);
    console.log(`feature`, feature)
  };

  return (
    <Marker onClick={_onClick} className="marker" >
      {children}
      
    </Marker>
  );
};

export default MapMarker;