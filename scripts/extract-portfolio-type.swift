// Extract the supplied recording's 100-frame typography cycle, with its background removed.
// Run: swift -module-cache-path /private/tmp/portfolio-swift-cache scripts/extract-portfolio-type.swift /path/to/reference.mov
import AVFoundation
import AppKit
let asset = AVURLAsset(url: URL(fileURLWithPath: CommandLine.arguments[1]))
let generator = AVAssetImageGenerator(asset: asset)
generator.appliesPreferredTrackTransform = true
generator.requestedTimeToleranceBefore = .zero
generator.requestedTimeToleranceAfter = .zero
let width = 1030, height = 175, columns = 5, rows = 10
let output = "public/images/featured-motion"
try FileManager.default.createDirectory(atPath: output, withIntermediateDirectories: true)
for sheet in 0..<2 {
 let atlas = NSBitmapImageRep(bitmapDataPlanes:nil,pixelsWide:width*columns,pixelsHigh:height*rows,bitsPerSample:8,samplesPerPixel:4,hasAlpha:true,isPlanar:false,colorSpaceName:.deviceRGB,bytesPerRow:width*columns*4,bitsPerPixel:32)!
 memset(atlas.bitmapData!,0,atlas.bytesPerRow*height*rows)
 for index in 0..<50 {
  let time = 0.5 + Double(sheet*50+index)/30.0
  let frame = try generator.copyCGImage(at:CMTime(seconds:time,preferredTimescale:600),actualTime:nil)
  let crop = frame.cropping(to:CGRect(x:260,y:240,width:width,height:height))!
  var bytes = [UInt8](repeating:0,count:width*height*4)
  let context = CGContext(data:&bytes,width:width,height:height,bitsPerComponent:8,bytesPerRow:width*4,space:CGColorSpaceCreateDeviceRGB(),bitmapInfo:CGImageAlphaInfo.premultipliedLast.rawValue)!
  context.draw(crop,in:CGRect(x:0,y:0,width:width,height:height))
  for y in 0..<height { for x in 0..<width {
   // Red-channel normalization removes both the red block and the gray canvas.
   let background = Double(bytes[x*4])
   let red = Double(bytes[(y*width+x)*4])
   let coverage = max(0,min(1,(background-red)/max(1,background-8)))
   let target = ((index/columns*height+y)*width*columns + index%columns*width+x)*4
   atlas.bitmapData![target+3] = coverage < 0.025 ? 0 : UInt8((coverage*255).rounded())
  }}
  if sheet == 0 && index == 0 {
   let poster = NSBitmapImageRep(bitmapDataPlanes:nil,pixelsWide:width,pixelsHigh:height,bitsPerSample:8,samplesPerPixel:4,hasAlpha:true,isPlanar:false,colorSpaceName:.deviceRGB,bytesPerRow:width*4,bitsPerPixel:32)!
   for y in 0..<height { memcpy(poster.bitmapData!+y*width*4,atlas.bitmapData!+y*atlas.bytesPerRow,width*4) }
   try poster.representation(using:.png,properties:[:])!.write(to:URL(fileURLWithPath:"\(output)/type-poster.png"))
  }
 }
 try atlas.representation(using:.png,properties:[:])!.write(to:URL(fileURLWithPath:"\(output)/type-atlas-\(sheet).png"))
 print("wrote sheet",sheet)
}
