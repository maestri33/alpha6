#!/usr/bin/perl
use strict;
use warnings;
use IO::Socket::INET;

my $port = 8080;
my $docroot = '.';

my $server = IO::Socket::INET->new(
    LocalAddr => '0.0.0.0',
    LocalPort => $port,
    Proto     => 'tcp',
    Listen    => 5,
    ReuseAddr => 1
) or die "Cannot create server: $!";

print "V7M Server running on http://0.0.0.0:$port\n";

while (my $client = $server->accept()) {
    my $request = '';
    while (<$client>) {
        $request .= $_;
        last if /^\r?\n$/;
    }
    
    my ($method, $path) = $request =~ /^(\w+)\s+(\S+)/;
    $path = '/' if !$path;
    $path = '/index.html' if $path eq '/';
    $path =~ s/^\///;
    $path =~ s/\?.*$//;
    $path =~ s/\.\.//g;
    
    my $file = "$docroot/$path";
    
    my $content_type = 'text/html';
    if ($file =~ /\.css$/) { $content_type = 'text/css'; }
    elsif ($file =~ /\.js$/) { $content_type = 'application/javascript'; }
    elsif ($file =~ /\.svg$/) { $content_type = 'image/svg+xml'; }
    elsif ($file =~ /\.png$/) { $content_type = 'image/png'; }
    elsif ($file =~ /\.jpg$|\.jpeg$/) { $content_type = 'image/jpeg'; }
    
    if (-f $file && -r $file) {
        open(my $fh, '<:raw', $file) or do {
            print $client "HTTP/1.1 403 Forbidden\r\nContent-Type: text/plain\r\n\r\nForbidden\n";
            close($client);
            next;
        };
        local $/;
        my $content = <$fh>;
        close($fh);
        
        my $length = length($content);
        print $client "HTTP/1.1 200 OK\r\n";
        print $client "Content-Type: $content_type\r\n";
        print $client "Content-Length: $length\r\n";
        print $client "Connection: close\r\n";
        print $client "\r\n";
        print $client $content;
    } else {
        print $client "HTTP/1.1 404 Not Found\r\nContent-Type: text/plain\r\n\r\nNot Found\n";
    }
    
    close($client);
}

close($server);
