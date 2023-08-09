import React from 'react';
import { ScrollView, View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat, libero sed tempor dignissim, sapien justo lacinia felis, a tempor nibh enim id quam. Duis molestie erat vitae interdum viverra. Phasellus egestas volutpat consequat. Praesent id dui metus. Praesent pulvinar elit ut aliquam accumsan. Etiam sed venenatis justo. In varius fringilla quam, eu vestibulum augue faucibus id. Aliquam sit amet arcu quis augue efficitur luctus. Curabitur id lectus lacus. Sed imperdiet at lorem semper feugiat. Nam tristique massa tortor.

In molestie, nulla vitae tincidunt aliquam, neque sem blandit orci, vitae semper lorem urna eget metus. Duis et velit ligula. Maecenas congue maximus gravida. Etiam pulvinar ut quam id iaculis. Nulla porttitor eget ante cursus egestas. Nunc gravida consequat metus, eu consectetur orci semper quis. Donec et arcu eu leo pellentesque semper et in mi. Fusce vitae magna diam. Sed nec placerat neque, eu volutpat ante. Nulla id sem in diam pretium porta.

Vestibulum pharetra blandit leo ac vestibulum. Donec lorem leo, ullamcorper non rhoncus ac, elementum sit amet ipsum. Donec vel hendrerit mauris, consectetur efficitur dolor. Nunc dapibus, sapien cursus consectetur maximus, urna mi varius ante, eget aliquam odio enim at tellus. Maecenas mollis, nisl at faucibus condimentum, magna eros sodales nisl, sit amet faucibus ex lorem eget lacus. Integer ut lobortis purus. Nullam gravida quam sit amet rhoncus aliquet. Sed augue sem, efficitur non efficitur vitae, malesuada ut ligula. Integer venenatis ipsum molestie, pretium nisi vel, eleifend lorem. Ut ut consectetur eros. Etiam volutpat pretium massa et viverra. Proin volutpat suscipit convallis. Proin non congue nisl. Maecenas non dui at felis auctor malesuada.

Vestibulum mattis eget ligula id dapibus. Aliquam elementum, tellus at feugiat convallis, odio odio feugiat erat, eu dapibus ex orci non nunc. Aenean egestas ornare tincidunt. In hac habitasse platea dictumst. Etiam ut augue consequat, aliquet massa non, mollis nulla. Curabitur in sem magna. Quisque ullamcorper, ex vitae vehicula lacinia, nisl quam congue quam, ac mollis magna justo varius sapien. Aliquam eros nunc, porta sit amet fringilla quis, semper vel tellus. Suspendisse potenti. Nunc velit diam, dapibus sed libero nec, tempor sodales felis. Nullam vel pulvinar ex. Quisque placerat odio in augue facilisis, ut dignissim tellus auctor. Fusce quis ornare ipsum, sit amet consequat dui. Ut congue feugiat faucibus. Sed metus augue, tempus sed est nec, finibus mollis est.

Sed eleifend felis vitae porttitor aliquet. Pellentesque sollicitudin sollicitudin lacus, sed faucibus nisl lobortis ut. Integer sollicitudin rutrum ante id auctor. Vestibulum cursus tellus at euismod finibus. In urna dolor, vehicula et hendrerit sit amet, ullamcorper convallis dui. Proin laoreet lacus sit amet sapien pulvinar, sit amet vulputate nisl viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc id sapien tempus, varius arcu vel, ullamcorper nisl. Duis dapibus, libero sed tristique mattis, lacus tellus feugiat odio, ac accumsan tortor leo rhoncus quam. Mauris mattis diam id maximus bibendum. Donec sed tempor ligula. Morbi euismod scelerisque massa, at pretium dui. Sed nec lectus sed nibh mattis egestas at et massa. Suspendisse ac egestas ante, nec luctus mi.</Text>
      <Button
        title="Go to Listing"
        onPress={() => navigation.navigate('Listing')}
      />
    </ScrollView>
  );
}

export default HomeScreen;
