import path from 'path';

export default {
   debug: true,
   devtool: 'inline-source-map',
   noInfo: false,
   entry: [
      path.resolve(__dirname, 'src/index') // đầu vào để bundle
   ],
   target: 'web',
   output: { // đầu ra tập tin đã được hợp thành, nhưng nó ko phải là tập tin vật lý thực sự mà lưu ở ram thôi
      path: path.resolve(__dirname, 'src'),
      publicPath: '/',
      filename: 'bundle.js'
   },
   plugins: [], // Có thể nạp thêm các plugin để tăng cường sức mạnh cho webpack
   module: {
      loaders: [
         {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']}, // webpack gọi babel để transpile về mã ES5 khi bundle
         {test: /\.css$/, loaders: ['style','css']} // không chỉ là js mà webpack còn có thể bundle nhiều thứ khác như css, sass, image... Cần gì thì khai báo ở loader này
      ]
   }
}
